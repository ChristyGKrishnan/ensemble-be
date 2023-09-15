import db from '../models/index.js';

const { Log, Workflow } = db.db;

Log.belongsTo(Workflow, { foreignKey: 'workflowId' });
Workflow.hasMany(Log, { foreignKey: 'workflowId' });

const createLog = async workflow => {
  const log = await Log.create({ workflowId: workflow.id });
  return log;
};

const endLog = async log => {
  log.endTime = new Date();
  await log.save();
};

export {
  createLog,
  endLog,
};
