module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    jwtVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  //1 conta para muitos links
  Account.associate = (models) => {
    Account.hasMany(models.Link, {foreignKey: 'accountId'})
  };

  Account.prototype.toJSON = function() {
    const values = {...this.get() };
    delete values.password;
    return values;
  };

  return Account;
};