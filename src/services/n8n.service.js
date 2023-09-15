import axios from "axios"

const N8N_API_KEY = process.env.N8N_API_KEY;
const n8nBaseEndpoint = process.env.N8N_ENDPOINT;

const invokeN8n = async (path, method, additionalInfo) => {
  const customHeaders = {
    'X-N8N-API-KEY': N8N_API_KEY
  }
  const api = `${n8nBaseEndpoint}/${path}`;

  switch(method) {
    case "get":
      return axios.get(api, additionalInfo, { headers: customHeaders });
    case "post":
      return axios.post(api, additionalInfo, { headers: customHeaders });
    case "put":
      return axios.put(api, additionalInfo, { headers: customHeaders });
    default:
      console.log("unhandled");
  }
}

const createWorkflowInN8n = async (transformedWorkflow) => {
  return invokeN8n("workflows", "post", transformedWorkflow)
}

const updateWorkflowInN8n = async (externalWorkflowId, transformedWorkflow) => {
  return invokeN8n(`workflows/${externalWorkflowId}`, "put", transformedWorkflow)
}



export {
  createWorkflowInN8n,
  updateWorkflowInN8n
};
