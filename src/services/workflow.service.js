/**
 * User service which serves DB operation
 * required by user controller
 *
 * @author Chetan Patil
 */
import db from '../models/index.js';

/**
 * @constant {Sequelize.models} - Workflow model extracted from db import
 */
const { Workflow } = db.db;

/**
 * findAll function to retrieve all available workflows in system
 *
 * @returns {Promise} User object array
 */
const findAll = async userId => {
  const filter = {};
  if (userId != null) { filter.user_id = userId; }

  return Workflow.findAll({
    where: filter,
    order: [
      ['updatedAt', 'DESC'],
    ],
  });
};

const findById = async workflowId => Workflow.findOne({
  where: { id: workflowId },
});

const create = async data => Workflow.create(data);

const update = async (workflowId, data) => Workflow.update(data, { where: { id: workflowId } });

export {
  findAll,
  findById,
  create,
  update,
};
