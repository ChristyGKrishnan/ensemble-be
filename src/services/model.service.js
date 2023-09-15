import db from '../models/index.js';

const { Model } = db.db;

const findAll = async filter => Model.findAll({ where: filter });

const findById = async modelId => Model.findOne({
  where: { id: modelId },
});

export {
  findAll,
  findById,
};
