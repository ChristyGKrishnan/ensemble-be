/**
 * Workflow controller
 *
 */
import httpStatus from 'http-status';

import axios from 'axios';
import * as errors from '../utils/api-error.js';
import * as response from '../middlewares/response-handler.js';
import {
  findAll,
  findById,
  create,
  update,
} from '../services/workflow.service.js';
import { createLog, endLog } from '../services/logs.service.js';

/**
 * @constant {function} responseHandler - function to form generic success response
 */
const responseHandler = response.default;
/**
 * @constant {NotFoundError} NotFoundError - not found error object
 */
const { NotFoundError } = errors.default;

/**
 * Function which provides functionality
 * to add/create new workflow in system
 *
 * @param {*} req - express HTTP request object
 * @param {*} res - express HTTP response object
 */
const addWorkflow = async (req, res) => {
  const workflowDetails = await create(req.body);
  res.status(httpStatus.CREATED).send(responseHandler(workflowDetails));
};

const updateWorkflow = async (req, res) => {
  console.log(req.body);
  const workflowDetails = await update(req.params.id, req.body);
  res.status(httpStatus.CREATED).send(responseHandler(workflowDetails));
};

/**
 * Function which provides functionality
 * to retrieve all workflows present in system
 *
 * @param {*} req - express HTTP request object
 * @param {*} res - express HTTP response object
 */
const getWorkflows = async (req, res) => {
  const { userId } = req.params;
  const workflows = await findAll(userId);
  res.status(httpStatus.OK).send(responseHandler(workflows));
};

/**
 * Function which provides functionality
 * to retrieve specific workflow based on provided id
 *
 * @param {*} req - express HTTP request object
 * @param {*} res - express HTTP response object
 *
 * @throws {NotFoundError} - if no workflow exists
 */
const getWorkflow = async (req, res) => {
  const workflow = await findById(req.params.workflowId);
  if (!workflow) {
    throw new NotFoundError();
  }

  res.status(httpStatus.OK).send(responseHandler(workflow));
};

const triggerWorkflow = async (req, res) => {
  try {
    const workflow = await findById(req.params.workflowId);
    if (!workflow) {
      throw new NotFoundError();
    }
    const log = await createLog(workflow);
    const n8nreponse = await axios.post(`http://localhost:5678/webhook-test/${workflow.n8nid}`, req.body);
    await endLog(log);
    res.status(n8nreponse.status).send(n8nreponse.data);
  } catch (error) {
  // Handle errors
    res.status(500).send(error.message);
  }
};

export {
  addWorkflow,
  updateWorkflow,
  getWorkflows,
  getWorkflow,
  triggerWorkflow,
};
