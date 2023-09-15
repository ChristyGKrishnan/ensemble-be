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
  
  
  
  INSERT INTO models ( name, typeenum, type, paid, input_format, output_format, category)
  VALUES 
  ('SeamlessM4T', 'T2TT', 'Text to Text Translation', FALSE, 
   '[{"field":"source", "type":"text"}, {"field":"img", "type":"image"}]',  '{"field":"text"}', 'Multimodel')
   
   ,
  
  ('SeamlessM4T', 'T2ST', 'Text to Speech Translation', FALSE, 
   '[
    {"field": "text", "type": "str"},
    {"field": "src", "type": "str"},
    {"field": "target", "type": "str"}
  ]', 
   ' {
      "field": "audio",
      "type": "base 64"
    }', 'Audio'),
  
  ('SeamlessM4T', 'S2ST', 'Speech to Speech Translation', FALSE, 
   '[{"field": "audio", "type": "audio"}, {"field": "target", "type": "text"}]', '{"audio": "base 64"}', 'Audio'),
  
  ('SeamlessM4T', 'S2TT', 'Speech to Text Translation', FALSE, 
   '[{"field": "audio", "type": "audio"}, {"field": "target", "type": "text"}]', 
   '{"field": "text", "type": "text"}', 'Audio'),
  
  ('Stable Diffusion', 'T2I', 'Text to Image', FALSE, 
   '[{"field": "inputs", "type": "text"}]', 
   '{"image": "Je suis Motto."}', 'Multimodel'),
  
  ('Open Journey', 'T2I', 'Text to Image', FALSE, 
   '[{"field": "inputs", "type": "text"}]', 
   '{"image": "Je suis Motto."}', 'Multimodel'),
  
  ('Real Vision', 'T2I', 'Text to Image', FALSE, 
   '[{"field": "inputs", "type": "text"}]', 
   '{"image": "Je suis Motto."}', 'Multimodel'),
  
  ('Anything', 'T2I', 'Text to Image', FALSE, 
   '[{"field": "inputs", "type": "text"}]', 
   '{"image": "Je suis Motto."}', 'Multimodel'),
  
  ('Magic Prompt', 'PromptGenerator','Prompt Generator', FALSE, 
   '[{"field": "text", "type": "text"}]', 
   '{"field": "text", "type": "text"}', 'NLP'),
  
  ('Stable Diffusion - InPainting', 'TI2I', 'Text Image to Image', FALSE, 
   '[{"field": "text", "type": "text"}, {"field": "image", "type": "image"}, {"field": "mask", "type": "image"}]', 
   '{"image": "Je suis Motto."}', 'Multimodel'),
  
  ('Chat GPT', 'T2T', 'Text to Text', TRUE, 
   '[{"field": "text", "type": "text"}]', 
   '{"field": "text", "type": "text"}', 'NLP'),
  
  ('Chat GPT', 'T2T',  'Summarizer', FALSE, 
   '[{"field": "text", "type": "text"}]', 
   '{"field": "text", "type": "text"}', 'NLP'),
  
  ('Sentiment', 'T2T', 'Sentiment', FALSE, NULL, NULL, 'NLP');
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
