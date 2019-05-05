const dbconnection = require('./Mongodb/dbconnection')
const router = require('./routers/router')
const hapi = require('hapi');
const server = new hapi.Server();

server.connection({
    port: 3000,
    host: 'localhost',
});
dbconnection.connect()
server.start((err) => {
    if (err) {
        throw err
    }
    console.log(`server started here ${server.info.port}`)

})

server.route(router.route_arr)