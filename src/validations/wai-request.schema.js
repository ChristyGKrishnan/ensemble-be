const waiSchema = {
    type: 'object',
    properties: {
        text: {
            type: 'string',
        }
    },
    required: [
        'text'
    ],
    additionalProperties: false,
};

export {
    waiSchema,
};
