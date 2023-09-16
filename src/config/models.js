export default [
  {
    "type": "NLP",
    "subtypes": [
      {
        "name": "Language Detection",
        "key": "LanguageDetection",
        "models": [
          {
            "id": "07564735-ad27-4c03-9b07-5f5382b4aeaf",
            "name": "Language Detection",
            "description": "A language detection model is an AI system that automatically identifies the language of a given text, making it useful for applications such as content filtering and multilingual user experiences",
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              }
            ],
            "output": {
              "field": "src",
              "type": "text"
            },
            "endpoint": "/detect-lang",
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "2.5k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          }
        ]
      },
      {
        "key": "T2TT",
        "name": "Text to Text Translation",
        "description": "A text-to-text model is an AI system that translates or generates text in one language or format into another, enabling various natural language processing tasks like language translation, summarization, and question answering",
        "models": [
          {
            "id": "c03eea72-ed4f-462b-a1b1-1277fe9b90f2",
            "name": "SeamlessM4T",
            "endpoint": "/seamlessm4t/T2TT",
            "paid": false,
            "inputFormat": [
              {
                "field": "source",
                "type": "text"
              },
              {
                "field": "img",
                "type": "image"
              }
            ],
            "outputFormat": {
              "field": "text",
              "type": "text"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "5k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          }
        ]
      },
      {
        "key": "PromptGenerator",
        "name": "Prompt Generator",
        "description": "A prompt generator is a tool or system that generates textual prompts to inspire creative content generation, such as writing, art, or brainstorming.",
        "models": [
          {
            "id": "9d4323ff-0610-45c9-b316-724a5bcb7850",
            "name": "Magic Prompt",
            "endpoint": "/magic-prompt",
            "paid": false,
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "text",
              "type": "text"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "3k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          }
        ]
      },
      {
        "key": "T2T",
        "name": "Text to Text",
        "description": "A text-to-text model is an AI system that translates or generates text in one language or format into another, enabling various natural language processing tasks like language translation, summarization, and question answering.",
        "models": [
          {
            "id": "fce46634-376d-41bc-a9ab-684753649730",
            "name": "Chat GPT",
            "endpoint": "/chatgpt",
            "paid": true,
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "text",
              "type": "text"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "7.5k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          }
        ]
      },
      {
        "key": "Summarizer",
        "name": "Summarizer",
        "description": "A text summarizer is an online tool that wraps up a text to a specified short length. It condenses a long article to main points.",
        "models": [
          {
            "id": "5822e914-b382-48be-bc75-6ce10328c6aa",
            "name": "Chat GPT",
            "endpoint": "/summarizer/chatgpt",
            "paid": false,
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "text",
              "type": "text"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "2k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          }
        ]
      },
      {
        "key": "Sentiment",
        "name": "Sentiment",
        "description": "A sentiment analyzer is a natural language processing tool that assesses and categorizes the emotional tone or sentiment expressed in text, typically as positive, negative, or neutral.",
        "models": [
          {
            "id": "ae6ff1bb-bf92-4259-98aa-f696b11dcb55",
            "name": "Sentiment Analyzer",
            "endpoint": "/sentiment",
            "paid": false,
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "sentiment",
              "type": "text"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "4.5k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          }
        ]
      }
    ]
  },
  {
    "type": "Multimodel",
    "subtypes": [
      {
        "key": "T2I",
        "name": "Text to Image",
        "description": "A text-to-image conversion model is an AI system that generates visual content from textual descriptions or prompts.",
        "models": [
          {
            "id": "cf78d719-a9a5-48c8-83ac-928044735862",
            "name": "Stable Diffusion",
            "endpoint": "/sd",
            "paid": false,
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "image",
              "type": "image"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "6.5k"
          },
          {
            "id": "fb43f704-1579-4d3f-a9e2-84a58276b8c5",
            "name": "Open Journey",
            "endpoint": "/open-journey",
            "paid": false,
            "inputFormat": [
              {
                "field": "inputs",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "image",
              "type": "image"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "8k"
          },
          {
            "id": "d769ec13-067e-4736-abaa-3d8e93a52a30",
            "name": "Real Vision",
            "endpoint": "/real-vis",
            "paid": false,
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "image",
              "type": "image"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "9k"
          },
          {
            "id": "fbab68fe-84d7-4414-b3ad-86053af5cf42",
            "name": "Anything",
            "endpoint": "/anything",
            "paid": false,
            "inputFormat": [
              {
                "field": "inputs",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "image",
              "type": "image"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "10k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          }
        ]
      },
      {
        "models": [
          {
            "id": "afc66efb-3256-40d5-b786-4dbb33cf5e30",
            "name": "Stable Diffusion - InPainting",
            "endpoint": "/ip",
            "paid": false,
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              },
              {
                "field": "image",
                "type": "image"
              },
              {
                "field": "mask",
                "type": "image"
              }
            ],
            "outputFormat": {
              "field": "image",
              "type": "image"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "4k"
          }
        ],
        "key": "TI2I",
        "name": "Text Image to Image",
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          }
        ]
      }
    ]
  },
  {
    "type": "Audio",
    "subtypes": [
      {
        "models": [
          {
            "id": "b73467b3-5041-40c8-81fd-0b8c46630e3f",
            "name": "SeamlessM4T",
            "endpoint": "/seamlessm4t/T2ST",
            "paid": false,
            "inputFormat": [
              {
                "field": "text",
                "type": "text"
              },
              {
                "field": "src",
                "type": "text"
              },
              {
                "field": "target",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "audio",
              "type": "audio"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "3.5k"
          }
        ],
        "key": "T2ST",
        "name": "Text to Speech Translation",
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          },
          {
            "field": "src",
            "type": "text"
          },
          {
            "field": "target",
            "type": "text"
          }
        ]
      },
      {
        "key": "S2ST",
        "name": "Speech to Speech Translation",
        "description": "A speech-to-speech model is an advanced AI system capable of converting spoken language from one source language to another target language in real-time, facilitating multilingual communication and interpretation.",
        "models": [
          {
            "id": "e9e6da6a-8380-4d67-ba77-8861069749b1",
            "name": "SeamlessM4T",
            "endpoint": "/seamlessm4t/S2ST",
            "paid": false,
            "inputFormat": [
              {
                "field": "audio",
                "type": "audio"
              },
              {
                "field": "target",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "audio",
              "type": "audio"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "6.5k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          },
          {
            "field": "src",
            "type": "text"
          },
          {
            "field": "target",
            "type": "text"
          }
        ]
      },
      {
        "key": "S2TT",
        "name": "Speech to Text Translation",
        "description": "Speech-to-text translation is the process of converting spoken language or audio input into written text, enabling the transcription and understanding of spoken content by automated systems or humans.",
        "models": [
          {
            "id": "9e25614d-5da3-434c-957e-63c43f7ac8b4",
            "name": "SeamlessM4T",
            "endpoint": "/seamlessm4t/S2TT",
            "paid": false,
            "inputFormat": [
              {
                "field": "audio",
                "type": "audio"
              },
              {
                "field": "target",
                "type": "text"
              }
            ],
            "outputFormat": {
              "field": "text",
              "type": "text"
            },
            "updatedAt": "2023-09-15T12:00:00Z",
            "popularity": "9.5k"
          }
        ],
        "inputFormat": [
          {
            "field": "text",
            "type": "text"
          },
          {
            "field": "src",
            "type": "text"
          },
          {
            "field": "target",
            "type": "text"
          }
        ]
      }
    ]
  }
]
  ;
