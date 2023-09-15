import express from 'express';

import usersRoute from './user.route.js';
import waiRoute from './wai.route.js';

const router = express.Router();

router.use('/users', usersRoute);
router.use('/wai', waiRoute);

export default router;
