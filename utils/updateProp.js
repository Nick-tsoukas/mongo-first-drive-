/**
 * 
 * @param {string} collectionName  //collection of the mongo db database example 'users'
 * @param {string} property // the field of the document 
 * @param {string} value // the value of the field example name : "Nick"
 * @param {string } setValue // new value to set
 * @param {Object} db 
 */
function updateProp(collectionName, property, value, setValue, db) {
    db.collection(collectionName).updateOne({
            [property]: value
        }, {
            $set: {
                [property]: setValue
            }
        })
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = updateProp;