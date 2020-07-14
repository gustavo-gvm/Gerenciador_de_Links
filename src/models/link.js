module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    isSocial: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defalt: 0,
    },
  });

  //link pertence a 1 conta
  Link.associate = (models) => {
    Link.belongsTo(models.Account, {foreignKey: 'accountId'})
  };

  return Link;
};