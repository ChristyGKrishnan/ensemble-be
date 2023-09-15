import express from 'express';
import { Validator } from 'express-json-validator-middleware';

import {
  addWorkflow,
  updateWorkflow,
  getWorkflows,
  getWorkflow,
  triggerWorkflow,
} from '../../controllers/workflow.controller.js';

const router = express.Router();
const { validate } = new Validator();

/**
 * @openapi
 * components:
 *   schemas:
 *     Worflow:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Workflow name.
 *           example: Text
 *         config:
 *           type: object
 *           description: workflow config.
 *         user_id:
 *           type: integer
 *           description: Workflow associated user.
 *
 *     CreateWorkflowRequest:
 *       allOf:
 *       - $ref: '#/components/schemas/Worflow'
 *       - type: object
 *         properties:
 *           config:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/Worflow'
 *
 *     CreateUserSuccess:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Flag stating status of API call
 *           example: true
 *         body:
 *           allOf:
 *           - $ref: '#/components/schemas/User'
 *           - type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: Id generated for created user.
 *                 example: 1
 *               skills:
 *                 type: array
 *                 items:
 *                   allOf:
 *                   - type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         description: Id generated for created skill.
 *                         example: 1
 *                       userId:
 *                         type: number
 *                         description: Id generated for created user.
 *                         example: 1
 *                   - $ref: '#/components/schemas/Skills'
 */

/**
 * @openapi
 * /v1/workflow:
 *   get:
 *     tags:
 *       - v1
 *     responses:
 *       200:
 *         description: Application helath details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Worflow'
 *   post:
 *     tags:
 *       - v1
 *     description: Endpoint to create/add new workflow
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateWorkflowRequest'
 *     responses:
 *       200:
 *         description: Application helath details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Worflow'
 *
 */
router
  .route('/')
  .post(addWorkflow)
  .get(getWorkflows);

router
  .route('/:id')
  .put(updateWorkflow)
  .get(getWorkflow);

router
  .route('/trigger/:id')
  .post(triggerWorkflow);

export default router;
