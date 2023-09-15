const { Sequelize, DataTypes } = require('sequelize');

const tableNames = ['user', 'skill'];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE models (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name VARCHAR(255),
      
      paid BOOLEAN,
      endpoint VARCHAR(255),
      input_format JSON,
      output_format JSON,
      type VARCHAR(255),
      typeenum VARCHAR(255),
      category VARCHAR(255)
  );
  
  
  
  INSERT INTO models ( name, typeenum, type, paid, endpoint, input_format, output_format, category)
  VALUES 
  ('SeamlessM4T', 'T2TT', 'Text to Text Translation', FALSE, '/seamlessm4t/T2TT',
   '[{"field":"source", "type":"text"}, {"field":"img", "type":"image"}]',  '{"field":"text","type": "text"}', 'NLP'),
  
  ('SeamlessM4T', 'T2ST', 'Text to Speech Translation', FALSE, '/seamlessm4t/T2ST',
   '[
    {"field": "text", "type": "text"},
    {"field": "src", "type": "text"},
    {"field": "target", "type": "text"}
  ]', 
   ' {
      "field": "audio",
      "type": "audio"
    }', 'Audio'),
  
  ('SeamlessM4T', 'S2ST', 'Speech to Speech Translation', FALSE, '/seamlessm4t/S2ST',
   '[{"field": "audio", "type": "audio"}, {"field": "target", "type": "text"}]', '{"field":"audio","type":"audio"}', 'Audio'),
  
  ('SeamlessM4T', 'S2TT', 'Speech to Text Translation', FALSE, '/seamlessm4t/S2TT',
   '[{"field": "audio", "type": "audio"}, {"field": "target", "type": "text"}]', 
   '{"field": "text", "type": "text"}', 'Audio'),
  
  ('Stable Diffusion', 'T2I', 'Text to Image', FALSE, '/sd',
   '[{"field": "text", "type": "text"}]', 
   '{"field": "image", "type": "image"}', 'Multimodel'),
  
  ('Open Journey', 'T2I', 'Text to Image', FALSE, '/open-journey',
   '[{"field": "inputs", "type": "text"}]', 
   '{"field": "image", "type": "image"}', 'Multimodel'),
  
  ('Real Vision', 'T2I', 'Text to Image', FALSE, '/real-vis',
   '[{"field": "text", "type": "text"}]', 
   '{"field": "image", "type": "image"}', 'Multimodel'),
  
  ('Anything', 'T2I', 'Text to Image', FALSE, '/anything',
   '[{"field": "inputs", "type": "text"}]', 
   '{"field": "image", "type": "image"}', 'Multimodel'),
  
  ('Magic Prompt', 'PromptGenerator','Prompt Generator', FALSE, '/magic-prompt',
   '[{"field": "text", "type": "text"}]', 
   '{"field": "text", "type": "text"}', 'NLP'),
  
  ('Stable Diffusion - InPainting', 'TI2I', 'Text Image to Image', FALSE, '/ip',
   '[{"field": "text", "type": "text"}, {"field": "image", "type": "image"}, {"field": "mask", "type": "image"}]', 
   '{"field": "image", "type": "image"}', 'Multimodel'),
  
  ('Chat GPT', 'T2T', 'Text to Text', TRUE, '/chatgpt',
   '[{"field": "text", "type": "text"}]', 
   '{"field": "text", "type": "text"}', 'NLP'),
  
  ('Chat GPT', 'Summarizer',  'Summarizer', FALSE, '/summarizer/chatgpt',
   '[{"field": "text", "type": "text"}]', 
   '{"field": "text", "type": "text"}', 'NLP'),
  
  ('Sentiment Analyzer', 'Sentiment', 'Sentiment', FALSE, '/sentiment', '[{ "field": "text", "type": "text" }]', '{"field":"sentiment","type":"text"}', 'NLP'),

  ('Language Detection', 'LanguageDetection',  'Language Detection', FALSE, '/detect-lang',
   '[{"field": "text", "type": "text"}]', 
   '{"field":"src","type":"text"}', 'NLP');
  
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      const tablePromises = tableNames.map(async table => {
        await queryInterface.dropTable(table, { transaction, cascade: true });
      });

      await Promise.all(tablePromises);
    });
  }
};
