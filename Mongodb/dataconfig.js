"use strict"

let user = require('../models/users').User;
let vehicle = require('../modelS/vehicles').Vehicle;
let database = require('./dbconnection').myData;
const log = require('simple-node-logger')

//getting user details from user collection

const getUser = (request, h) => {
    const db = database();
    db.collection('user')
        .find({}).toArray(function (err, result) {
            if(err)
                log.error(err)
            return h.response('User are : ' + JSON.stringify(result));
            
        })
}

//posting user details on user collection

const postUser = (request, h) => {
    const db = database();
    db.collection('user').createIndex({ "userid": 1 })
    //creating object of user class and storing it in user collection
    var myobj = new user(request.payload.userid, request.payload.name, request.payload.password, request.payload.address);
    db.collection('user').insertOne(myobj, (err, res) => {
        if (err) log.error(err);
        return h("data is inserted");
    })
}

//getting vehicle details from vehicle colection

const getVehicle = (request, h) => {
    const db = database();
    db.collection('vehicle')
        .find({}).toArray(function (err, result) {
            if (err) log.error(err);
            return h.response('Vehicles are' + JSON.stringify(result));
        })

}

//posting vehicle details on vehicle collection

const postVehicle = (request, h) => {
    const db = database();

    //creating object of vehicle class and storing it in vehicle collection

    var myobj = new vehicle(request.payload.brand, request.payload.name, request.payload.userid);
    db.collection('vehicle').insertOne(myobj, (err, res) => {
        if (err) log.error(err);
        return h.response("data is inserted");
    })
}

//getting vehicle and user relational data from collection 

const UserVehicle = (request, h) => {
    const db = database();
    db.collection('user').aggregate([
        {
            $lookup:
            {
                from: 'vehicle',
                localField: 'userid',
                foreignField: 'userid',
                as: 'Vehicles'
            }
        }
    ]).toArray(function (err, result) {
        if (err) log.error(err);
        return h.response('Vehicle related to user' + JSON.stringify(result))
    });
}

//exporting all methods 

module.exports = {
    getUser: getUser,
    postUser: postUser,
    getVehicle: getVehicle,
    postVehicle: postVehicle,
    UserVehicle: UserVehicle
}
