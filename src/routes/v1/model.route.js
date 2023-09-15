import express from 'express';

import { getModelByHierarchy, getModels } from '../../controllers/model.controller.js';

const router = express.Router();

router
  .route('/')
  .get(getModels);

router
  .route('/hierarchy')
  .get(getModelByHierarchy);

export default router;
