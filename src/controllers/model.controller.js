import httpStatus from 'http-status';
import { findAll } from '../services/model.service.js';
import * as errors from '../utils/api-error.js';
import * as response from '../middlewares/response-handler.js';

const responseHandler = response.default;
const { InternalServerError } = errors.default;

const getModels = async (req, res) => {
  try {
    const models = await findAll();
    return res.status(httpStatus.OK).send(responseHandler(models));
  } catch (error) {
    console.log(error);
    throw new InternalServerError();
  }
};

export { getModels };
