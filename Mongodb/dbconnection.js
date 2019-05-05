"use strict"

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27018'
const log = require('simple-node-logger').createSimpleLogger('project.log');
let _db;

// creating connection and database

let connect = () => {
  mongo.connect(url, (err, client) => {
    if (err) {
      log.error(err)
      return
    }
    console.log("database has been connected")
    _db = client.db('app');  // database is created 
    //log.info('Database is connected at port 27017')
  })
}


let myData = () => {
  if (!_db) {
    return "database not found"
  }
  else {
    return _db;
  }
}

//exporting connection and database

module.exports = {
  connect: connect,
  myData: myData
}