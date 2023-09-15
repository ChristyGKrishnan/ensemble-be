const { Sequelize, DataTypes } = require('sequelize');

const tableNames = ['user', 'skill'];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    CREATE TABLE IF NOT EXISTS models (
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
  
  INSERT INTO public.models (id,"name",paid,endpoint,input_format,output_format,"type",typeenum,category) VALUES
    ('6e94bce4-24ad-4915-98e7-6d3b2511fbf2','SeamlessM4T',false,'https://models-eta.vercel.app/seamlessm4t/T2TT','[{"field":"source", "type":"text"}, {"field":"img", "type":"image"}]','{"field":"text","type": "text"}','Text to Text Translation','T2TT','NLP'),
    ('a0843734-8d19-40c0-a4a3-64e3cc24c0c8','SeamlessM4T',false,'https://models-eta.vercel.app/seamlessm4t/T2ST','[{"field": "text", "type": "text"},{"field": "src", "type": "text"},{"field": "target", "type": "text"}]',' {"field": "audio","type": "audio"}','Text to Speech Translation','T2ST','Audio'),
    ('ecba3b5b-7f74-4d22-95f6-36d95ca36094','SeamlessM4T',false,'https://models-eta.vercel.app/seamlessm4t/S2ST','[{"field": "audio", "type": "audio"}, {"field": "target", "type": "text"}]','{"field":"audio","type":"audio"}','Speech to Speech Translation','S2ST','Audio'),
    ('e7e9a6ad-143a-4880-8539-76e26de6c902','SeamlessM4T',false,'https://models-eta.vercel.app/seamlessm4t/S2TT','[{"field": "audio", "type": "audio"}, {"field": "target", "type": "text"}]','{"field": "text", "type": "text"}','Speech to Text Translation','S2TT','Audio'),
    ('5ff89625-8072-45ed-b04a-31f096d03817','Stable Diffusion',false,'http://192.168.3.117:5000/sd','[{"field": "text", "type": "text"}]','{"field": "image", "type": "image"}','Text to Image','T2I','Multimodel'),
    ('a4382c6b-608d-42d5-9946-55ee783c9825','Open Journey',false,'http://192.168.3.117:5000/open-journey','[{"field": "inputs", "type": "text"}]','{"field": "image", "type": "image"}','Text to Image','T2I','Multimodel'),
    ('dcee1363-ae55-46aa-88e8-9a4e98b1551c','Real Vision',false,'http://192.168.3.117:5000/real-vis','[{"field": "text", "type": "text"}]','{"field": "image", "type": "image"}','Text to Image','T2I','Multimodel'),
    ('58a931a1-f5fc-477b-85d7-143fff7215ad','Anything',false,'http://192.168.3.117:5000/anything','[{"field": "inputs", "type": "text"}]','{"field": "image", "type": "image"}','Text to Image','T2I','Multimodel'),
    ('ce718020-6c7b-4acd-86a0-4027e7971bbd','Magic Prompt',false,'http://192.168.3.117:5000/magic-prompt','[{"field": "text", "type": "text"}]','{"field": "text", "type": "text"}','Prompt Generator','PromptGenerator','NLP'),
    ('7a3ff72b-6948-436f-88b8-9df00c8f5ca2','Stable Diffusion - InPainting',false,'http://192.168.3.117:5000/ip','[{"field": "text", "type": "text"}, {"field": "image", "type": "image"}, {"field": "mask", "type": "image"}]','{"field": "image", "type": "image"}','Text Image to Image','TI2I','Multimodel');

  INSERT INTO public.models (id,"name",paid,endpoint,input_format,output_format,"type",typeenum,category) VALUES
    ('fed62b03-6b9e-4699-8686-84ff01c70535','Chat GPT',true,'http://192.168.3.117:5000/chatgpt','[{"field": "text", "type": "text"}]','{"field": "text", "type": "text"}','Text to Text','T2T','NLP'),
    ('cf88621f-57aa-4cef-9838-e4d05ceddb33','Chat GPT',false,'http://192.168.3.117:5000/summarizer/chatgpt','[{"field": "text", "type": "text"}]','{"field": "text", "type": "text"}','Summarizer','Summarizer','NLP'),
    ('ab4108bf-af16-4d16-8a98-a19d9a07c1f6','Sentiment Analyzer',false,'http://192.168.3.117:5000/sentiment','[{ "field": "text", "type": "text" }]','{"field":"sentiment","type":"text"}','Sentiment','Sentiment','NLP'),
    ('513672ed-9aad-4c11-a659-1540b8d3fac5','Language Detection',false,'http://192.168.3.117:5000/detect-lang','[{"field": "text", "type": "text"}]','{"field":"src","type":"text"}','Language Detection','LanguageDetection','NLP');
  
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
