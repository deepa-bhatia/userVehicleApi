const config = require('../Mongodb/dataconfig')

//Array of routers 
const route_arr = [{
    method: 'GET',
    path: '/user',
    handler:config.getUser  //calling the getter method for user details
},
{
    method: 'POST',
    path: '/user',
    handler: config.postUser  //calling the post method for user details 
},
{
    method: 'GET',
    path: '/vehicle',
    handler: config.getVehicle  //calling the getter method for vehicle details 
},
{
    method: 'POST',
    path: '/vehicle',
    handler: config.postVehicle  //calling the post method for vehicle details 
},
{
    method: 'GET',
    path: '/AllDetails',
    handler: config.UserVehicle  //calling the getter method for relational data between user and vehicle collection
}]

exports.route_arr = route_arr;  //exporting the array of routers