export default [
  {
    type: 'NLP',
    subtypes: [
      {
        name: 'Language Detection',
        key: 'LanguageDetection',
        models: [
          {
            id: '07564735-ad27-4c03-9b07-5f5382b4aeaf',
            name: 'Language Detection',
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
            ],
            output: {
              field: 'src',
              type: 'text',
            },
            endpoint: '/detect-lang',
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
        ],
      },
      {
        key: 'T2TT',
        name: 'Text to Text Translation',
        models: [
          {
            id: 'c03eea72-ed4f-462b-a1b1-1277fe9b90f2',
            name: 'SeamlessM4T',
            endpoint: '/seamlessm4t/T2TT',
            paid: false,
            inputFormat: [
              {
                field: 'source',
                type: 'text',
              },
              {
                field: 'img',
                type: 'image',
              },
            ],
            outputFormat: {
              field: 'text',
              type: 'text',
            },
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
        ],
      },
      {
        key: 'PromptGenerator',
        name: 'Prompt Generator',
        models: [
          {
            id: '9d4323ff-0610-45c9-b316-724a5bcb7850',
            name: 'Magic Prompt',
            endpoint: '/magic-prompt',
            paid: false,
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'text',
              type: 'text',
            },
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
        ],
      },
      {
        key: 'T2T',
        name: 'Text to Text',
        models: [
          {
            id: 'fce46634-376d-41bc-a9ab-684753649730',
            name: 'Chat GPT',
            endpoint: '/chatgpt',
            paid: true,
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'text',
              type: 'text',
            },
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
        ],
      },
      {
        key: 'Summarizer',
        name: 'Summarizer',
        models: [
          {
            id: '5822e914-b382-48be-bc75-6ce10328c6aa',
            name: 'Chat GPT',
            endpoint: '/summarizer/chatgpt',
            paid: false,
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'text',
              type: 'text',
            },
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
        ],
      },
      {
        key: 'Sentiment',
        name: 'Sentiment',
        models: [
          {
            id: 'ae6ff1bb-bf92-4259-98aa-f696b11dcb55',
            name: 'Sentiment Analyzer',
            endpoint: '/sentiment',
            paid: false,
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'sentiment',
              type: 'text',
            },
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
        ],
      },
    ],
  },
  {
    type: 'Multimodel',
    subtypes: [
      {
        key: 'T2I',
        name: 'Text to Image',
        models: [
          {
            id: 'cf78d719-a9a5-48c8-83ac-928044735862',
            name: 'Stable Diffusion',
            endpoint: '/sd',
            paid: false,
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'image',
              type: 'image',
            },
          },
          {
            id: 'fb43f704-1579-4d3f-a9e2-84a58276b8c5',
            name: 'Open Journey',
            endpoint: '/open-journey',
            paid: false,
            inputFormat: [
              {
                field: 'inputs',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'image',
              type: 'image',
            },
          },
          {
            id: 'd769ec13-067e-4736-abaa-3d8e93a52a30',
            name: 'Real Vision',
            endpoint: '/real-vis',
            paid: false,
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'image',
              type: 'image',
            },
          },
          {
            id: 'fbab68fe-84d7-4414-b3ad-86053af5cf42',
            name: 'Anything',
            endpoint: '/anything',
            paid: false,
            inputFormat: [
              {
                field: 'inputs',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'image',
              type: 'image',
            },
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
        ],
      },
      {
        models: [
          {
            id: 'afc66efb-3256-40d5-b786-4dbb33cf5e30',
            name: 'Stable Diffusion - InPainting',
            endpoint: '/ip',
            paid: false,
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
              {
                field: 'image',
                type: 'image',
              },
              {
                field: 'mask',
                type: 'image',
              },
            ],
            outputFormat: {
              field: 'image',
              type: 'image',
            },
          },
        ],
        key: 'TI2I',
        name: 'Text Image to Image',
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
        ],
      },
    ],
  },
  {
    type: 'Audio',
    subtypes: [
      {
        models: [
          {
            id: 'b73467b3-5041-40c8-81fd-0b8c46630e3f',
            name: 'SeamlessM4T',
            endpoint: '/seamlessm4t/T2ST',
            paid: false,
            inputFormat: [
              {
                field: 'text',
                type: 'text',
              },
              {
                field: 'src',
                type: 'text',
              },
              {
                field: 'target',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'audio',
              type: 'audio',
            },
          },
        ],
        key: 'T2ST',
        name: 'Text to Speech Translation',
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
          {
            field: 'src',
            type: 'text',
          },
          {
            field: 'target',
            type: 'text',
          },
        ],
      },
      {
        key: 'S2ST',
        name: 'Speech to Speech Translation',
        models: [
          {
            id: 'e9e6da6a-8380-4d67-ba77-8861069749b1',
            name: 'SeamlessM4T',
            endpoint: '/seamlessm4t/S2ST',
            paid: false,
            inputFormat: [
              {
                field: 'audio',
                type: 'audio',
              },
              {
                field: 'target',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'audio',
              type: 'audio',
            },
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
          {
            field: 'src',
            type: 'text',
          },
          {
            field: 'target',
            type: 'text',
          },
        ],
      },
      {
        key: 'S2TT',
        name: 'Speech to Text Translation',
        models: [
          {
            id: '9e25614d-5da3-434c-957e-63c43f7ac8b4',
            name: 'SeamlessM4T',
            endpoint: '/seamlessm4t/S2TT',
            paid: false,
            inputFormat: [
              {
                field: 'audio',
                type: 'audio',
              },
              {
                field: 'target',
                type: 'text',
              },
            ],
            outputFormat: {
              field: 'text',
              type: 'text',
            },
          },
        ],
        inputFormat: [
          {
            field: 'text',
            type: 'text',
          },
          {
            field: 'src',
            type: 'text',
          },
          {
            field: 'target',
            type: 'text',
          },
        ],
      },
    ],
  },
];
