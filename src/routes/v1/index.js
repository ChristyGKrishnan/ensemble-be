import express from 'express';

import usersRoute from './user.route.js';
import workflowRoute from './worflow.route.js';

const router = express.Router();

router.use('/users', usersRoute);
router.use('/workflow', workflowRoute);

export default router;
