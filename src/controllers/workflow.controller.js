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

const n8nWebhookEndpoint = process.env.N8N_TRIGGER_ENDPOINT;

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
  const workflow = await findById(req.params.id);
  if (!workflow) {
    throw new NotFoundError();
  }

  res.status(httpStatus.OK).send(responseHandler(workflow));
};

const triggerWorkflow = async (req, res) => {
  try {
    const workflow = await findById(req.params.id);
    if (!workflow) {
      throw new NotFoundError();
    }

    const startNode = workflow.config.nodes.find(node => node.type == "startNode");

    const log = await createLog(workflow);
    let n8nreponse = null;
    if (startNode) {
      n8nreponse = await axios.post(`${n8nWebhookEndpoint}/${startNode.id}`, req.body);
    } else {
      n8nreponse = await axios.post(`${n8nWebhookEndpoint}/19`, req.body);
    }
    
    await endLog(log);
    res.status(n8nreponse.status).send(n8nreponse.data);
  } catch (error) {
    console.error(error);
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
