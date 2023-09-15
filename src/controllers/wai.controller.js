import httpStatus from 'http-status';

import * as response from '../middlewares/response-handler.js';

import { getWAI } from '../services/wai.service.js';

/**
 * @constant {function} responseHandler - function to form generic success response
 */
const responseHandler = response.default;

/**
 * Function which provides functionality
 * to generate Workflow using AI
 *
 * @param {*} req - express HTTP request object
 * @param {*} res - express HTTP response object
 */
const generateWAI = async (req, res) => {
  const wai = await getWAI(req.body);
  res.status(httpStatus.CREATED).send(responseHandler(wai));
};

export {
  generateWAI,
};
