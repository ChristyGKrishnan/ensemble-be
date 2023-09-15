import { v4 as uuidv4 } from 'uuid';

const getIntermediateCodeNode = (count) => {
    const id = uuidv4();
    const x = 40;
    return {
        "parameters": {
            "mode": "runOnceForEachItem",
            "jsCode": "\n\n// Loop over input items and add a new field called 'myNewField' to the JSON of \nconst dataFromWebhook = $('Webhook').item.json.body;\nconst dataFromtranslated =$input.item.json;\n\n// Merge the two objects, with $json.data taking precedence\nconst mergedData = { ...dataFromWebhook, ...dataFromtranslated };\n\nreturn { mergedData: mergedData };"
        },
        "id": id,
        "name": `Code${count}`,
        "type": "n8n-nodes-base.code",
        "typeVersion": 2,
        "position": [
            x + count,
            220
        ]
    }
}

const updateAiNodeForN8n = (n8nWorkflowNode, workflowNode) => {
    n8nWorkflowNode.type = "n8n-nodes-base.httpRequest";
    n8nWorkflowNode.parameters.method = "POST";
    n8nWorkflowNode.parameters.url = workflowNode.data.model?.endpoint;
    n8nWorkflowNode.parameters.sendBody = true;
    n8nWorkflowNode.parameters.specifyBody = "json";
    n8nWorkflowNode.parameters.jsonBody = "={{ JSON.stringify($json.mergedData) }}";
    n8nWorkflowNode.parameters.options = {
        redirect: {
            redirect: {},
        },
    };

    return n8nWorkflowNode;
}

const addEdge = (n8nWorkflowFormat, sourceNodeName, targetNodeName) => {
    if (!n8nWorkflowFormat.connections[sourceNodeName]) {
        n8nWorkflowFormat.connections[sourceNodeName] = {};
    }

    if (!n8nWorkflowFormat.connections[sourceNodeName].main) {
        n8nWorkflowFormat.connections[sourceNodeName].main = [];
    }

    n8nWorkflowFormat.connections[sourceNodeName].main.push([
        {
            node: targetNodeName,
            type: "main",
            index: 0,
        },
    ]);
}

const isAiNode = (nodeType) => {
    const aiNodes =
        [
            "T2TT",
            "T2ST",
            "S2ST",
            "S2TT",
            "T2I",
            "PromptGenerator",
            "T2T",
            "Summarizer",
            "Sentiment",
            "LanguageDetection"
        ];

    return aiNodes.includes(nodeType);    
}

function mapToN8nWorkflowFormat(workflowData) {
    const n8nWorkflowFormat = {
        name: workflowData.name,
        nodes: [],
        connections: {},
        settings: {},
    };

    const intermediateCodeNodesAddedInfo = new Map();
    let codeNodeCount = 1;

    workflowData.config.nodes.forEach((workflowNode) => {
        const n8nWorkflowNode = {
            parameters: {},
            id: workflowNode.id,
            name: workflowNode.data.label,
            type: "",
            position: [workflowNode.position.x, workflowNode.position.y],
        };

        switch (workflowNode.type) {
            case "startNode":
                n8nWorkflowNode.type = "n8n-nodes-base.webhook";
                n8nWorkflowNode.webhookId = workflowNode.id;
                n8nWorkflowNode.parameters.path = workflowNode.id;
                n8nWorkflowNode.parameters.responseMode = "lastNode";
                n8nWorkflowNode.parameters.httpMethod = "POST";
                n8nWorkflowNode.parameters.options = {};
                break;
            case "httpsNode":
                n8nWorkflowNode.type = "n8n-nodes-base.httpRequest";
                n8nWorkflowNode.parameters.method = "POST";
                n8nWorkflowNode.parameters.url = "https://models-eta.vercel.app//seamlessm4t/T2TT";
                n8nWorkflowNode.parameters.sendBody = true;
                n8nWorkflowNode.parameters.bodyParameters = {
                    parameters: [
                        {
                            name: "text",
                            value: "Hi, Im Motto",
                        },
                        {
                            name: "src",
                            value: "English",
                        },
                        {
                            name: "target",
                            value: "French",
                        },
                    ],
                };
                n8nWorkflowNode.parameters.options = {
                    redirect: {
                        redirect: {},
                    },
                };
                break;
            case "T2TT":
            case "T2ST":
            case "S2ST":
            case "S2TT":
            case "T2I":
            case "PromptGenerator":
            case "T2T":
            case "Summarizer":
            case "Sentiment":
            case "LanguageDetection":
                updateAiNodeForN8n(n8nWorkflowNode, workflowNode)
                const intermediateCodeNode = getIntermediateCodeNode(codeNodeCount++);
                n8nWorkflowFormat.nodes.push(intermediateCodeNode)
                intermediateCodeNodesAddedInfo.set(workflowNode.id, {
                    codeNodeId: intermediateCodeNode.id,
                    name: intermediateCodeNode.name,
                });
                break;
            case "codeNode":
                n8nWorkflowNode.type = "n8n-nodes-base.code";
                n8nWorkflowNode.parameters.jsCode = "// Your JavaScript code here";
                break;
            case "endNode":
                break;
            // Add more cases for other node types if needed
        }

        if (workflowNode.type != "endNode") {
            n8nWorkflowFormat.nodes.push(n8nWorkflowNode);
        }
    });

    // Map 'edges' to 'connections'
    workflowData.config.edges.forEach((edge) => {
        const sourceNode = workflowData.config.nodes.find((node1) => node1.id === edge.source);
        const targetNode = workflowData.config.nodes.find((node1) => node1.id === edge.target);

        // console.log(targetNode);
        console.log(intermediateCodeNodesAddedInfo);
        if (isAiNode(targetNode.type)) {
            const intermediateCodeNodeInfo = intermediateCodeNodesAddedInfo.get(targetNode.id);
            addEdge(n8nWorkflowFormat, sourceNode.data.label, intermediateCodeNodeInfo.name);
            addEdge(n8nWorkflowFormat, intermediateCodeNodeInfo.name, targetNode.data.label);
        } else if (targetNode.type == "endNode") {
            n8nWorkflowFormat.connections[sourceNode.data.label] = { main: [] };
        }
        else {
            addEdge(n8nWorkflowFormat, sourceNode, targetNode);
        }
    });

    return n8nWorkflowFormat;
}

export { mapToN8nWorkflowFormat };
