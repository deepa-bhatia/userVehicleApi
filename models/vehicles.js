
// a model class of vehicle which is a vehicle collection of database
class Vehicle {
    //constructor to initialise the value coming from dataconfig
    constructor(brand, name, userid) {
        this.name = name;
        this.brand = brand;
        this.userid = userid;
    }
}

exports.Vehicle = Vehicle;