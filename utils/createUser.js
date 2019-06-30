function createUser(userObject, db){
    db.collection('users').insertOne(userObject,(err, results) => {
        if(err) console.log(err);
        console.log(userObject, 'was created');
    },(err, results) => {
        if(err) console.log('there was an error in createUser function');
        console.log(results.ops);
    })
}


module.exports = createUser;