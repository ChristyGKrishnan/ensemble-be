/**
 * Model class for "workflow"
 *
 * @param {Sequelize} sequelize - sequelize object
 * @param {Sequelize.DataTypes} DataTypes - sequelize datatypes
 *
 * @returns Workflow - sequelize model for workflow entity
 */
export default (sequelize, DataTypes) => {
  const Workflow = sequelize.define('Workflow', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    config: DataTypes.JSON,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    externalWorkflowId: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'workflow',
    underscored: true,
  });

  // User.associate = models => {
  //   models.User.hasMany(models.Skill, { foreignKey: 'userId', targetId: 'id' });
  // };
  return Workflow;
};
