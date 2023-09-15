/**
 * Model class for AI Models
 * @author Keyminds
 */
export default (sequelize, DataTypes) => {
  const Model = sequelize.define('Model', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    endpoint: DataTypes.STRING,
    paid: DataTypes.BOOLEAN,
    inputFormat: DataTypes.JSONB,
    outputFormat: DataTypes.JSONB,
    typeenum: DataTypes.STRING,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
  }, {
    tableName: 'models',
    underscored: true,
    timestamps: false,
  });

  return Model;
};
