
// a model class of user which is a user collection of database
class User {
    //constructor to initialise the value coming from dataconfig
    constructor(userid, name, password, address) {
        this.userid = userid;
        this.name = name;
        this.password = password;
        this.address = address;
    }
    
}

exports.User = User;