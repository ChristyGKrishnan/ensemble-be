/**
 * User service which serves DB operation
 * required by user controller
 *
 * @author Chetan Patil
 */
import db from '../models/index.js';
import { createWorkflowInN8n, updateWorkflowInN8n } from '../services/n8n.service.js'
import { mapToN8nWorkflowFormat } from '../utils/transformer.js'
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

const findById = async workflowId => {
  const data = await Workflow.findOne({
    where: { id: workflowId }
  });
  return data;
}

const create = async data => {
  const n8nData = mapToN8nWorkflowFormat(data);
  let externalWorkflowId = null;
  try {
    console.log("Creating workflow in N8N...");
    const n8nWorkflow = await createWorkflowInN8n(n8nData);
    externalWorkflowId = n8nWorkflow.data.id;
    console.log("Created workflow in N8N..."); 
  } catch (error) {
    console.error(error);
    console.log("Failed to create in N8N...");
  }
  return Workflow.create({...data, externalWorkflowId: externalWorkflowId });
};

const update = async (workflowId, data) => {
  const existingWorkflowData = await findById(workflowId);

  if (existingWorkflowData.externalWorkflowId) {
    try {
      const n8nData = mapToN8nWorkflowFormat(data);
      console.log("Updating workflow in N8N...");
      const updatedN8nWorkflow = await updateWorkflowInN8n(existingWorkflowData.externalWorkflowId, n8nData);
      console.log("Updated workflow in N8N...");    
    } catch (error) {
      console.error(error);
      console.log("Failed to update in N8N...");
    }
  }

  return Workflow.update(data, { where: { id: workflowId } });
};

export {
  findAll,
  findById,
  create,
  update,
};
