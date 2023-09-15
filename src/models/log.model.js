/**
 * Model class for AI Models
 * @author Keyminds
 */
export default (sequelize, DataTypes) => {
  const Model = sequelize.define('Log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    startTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'logs',
    underscored: true,
    timestamps: false,
  });

  return Model;
};
