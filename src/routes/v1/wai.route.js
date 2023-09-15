import express from 'express';
import { Validator } from 'express-json-validator-middleware';

import { generateWAI } from '../../controllers/wai.controller.js';
import { waiSchema } from '../../validations/wai-request.schema.js';

const router = express.Router();
const { validate } = new Validator();

router
  .route('/')
  .post(validate({ body: waiSchema }), generateWAI);

export default router;
