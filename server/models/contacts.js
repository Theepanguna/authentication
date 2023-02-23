let mongoose = require('mongoose');
let contactsModel = mongoose.Schema({
    ContactName: String,
    ContactNumber: String,
    EmailAddress: String,
    
},
    {
        collection: "contact"
    });

module.exports = mongoose.model('contact', contactsModel);