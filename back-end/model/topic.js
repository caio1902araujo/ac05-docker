module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define('Topic', {
        title: DataTypes.STRING,
        description: DataTypes.STRING   
    }, { tableName: 'topics', sequelize })

    return Topic
}