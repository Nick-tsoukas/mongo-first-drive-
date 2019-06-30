/*
Reference to mongodb crud operations
========= Create operations ============
db.collection('some-collection').insert()
db.collection('some-collection').insertMany()
db.collection('some-collection').insertOne()

========= Read Operations ================
db.collection('some-collection').find({pass_options: 'here'});
db.collection('some-collection).findOne({_id: new ObjectId("somecodehere")})

what are object ids
GUI id global unique identify 
ability to scale well 
no change of collision from ID 
We can generate are own IDs


notes 
We can use the timestamp to check if the database was created for the day.
This way we do not keep on hitting the api
*/

// current db tasks, users, data-test 

// note cursor >>> points to document/data 

const createUser = require('./utils/createUser');
const connectionMessage = require('./utils/connectionMessage'); // simply logs that the connection was successful 
const {
    MongoClient,
    ObjectID
} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'task-app';
const client = new MongoClient(url, {
    useNewUrlParser: true
});
//  helpers ============
// This will return an ... so you don't have to type out the new ObjectID every time and litter up the code 
const id = (id) => {
    return new ObjectID(id);
}

/**
 * finds and then logs a user for the collection 
 * @param {string} name 
 */
const user = function findUser(name, db) {
    console.log(`Looking for ${name}...`);
    db.collection('users').findOne({
            name: name
        })
        .then((user) => {
            if(!user){
                console.log(`Could not find the user ${name}`);
            }
            console.log(`We Found the`, user);
            return user;
        })
        .catch((err) => {
            if(err) console.log(err);
        })
}

client.connect((err) => {
    if (err) throw err;
    const db = client.db(dbName);
    connectionMessage();

    user('Nick',db);
   




});