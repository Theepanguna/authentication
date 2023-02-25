/*-- models/contacts.js
   Pratheepan Gunaratnam
   Student id :- 301320478
   23-02-23

*/

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