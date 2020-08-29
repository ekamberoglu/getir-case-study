const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://getir-user:getir-whatever-you-can!@cluster0.qu2ur.mongodb.net/getir-case-study?retryWrites=true&w=majority'

const connect = () => MongoClient
    .connect(connectionURL, {useNewUrlParser: true})

module.exports = connect
