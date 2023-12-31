import express from 'express';

import usersRoute from './user.route.js';
import waiRoute from './wai.route.js';
import workflowRoute from './worflow.route.js';
import modelsRoute from './model.route.js';

const router = express.Router();

router.use('/users', usersRoute);
router.use('/wai', waiRoute);
router.use('/workflow', workflowRoute);
router.use('/models', modelsRoute);

export default router;
