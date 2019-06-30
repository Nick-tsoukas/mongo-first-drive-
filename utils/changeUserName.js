function updateUserName(userName, change, db) {
    db.collection('users').updateOne({
            name: userName
        }, {
            $set: {
                name: change
            }
        })
        .then((result) => {
            db.collection('users').findOne({
                    name: change
                })
                .then((user) => {
                    console.log(user)
                })
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = updateUserName;