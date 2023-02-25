/*-- controllers/contact.js
   Pratheepan Gunaratnam
   Student id :- 301320478
   23-02-23

*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let contact = require('../models/contacts');

//we want to display the bookList
module.exports.displayContactlist = (req, res, next) => {
    contact.find((err, contactlist) => {
        if (err) {
            return console.error(err);
        }
        else {
           //console.log(BookList);
            res.render('contact/list', { title: 'Business Contact List', contactlist: contactlist,displayName:req.user?req.user.displayName:'' });
        }
    });
}
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add',{title:'Add Contact',displayName:req.user?req.user.displayName:''})
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = contact({
        "ContactName": req.body.ContactName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress,
        
    });
    contact.create(newContact, (err, contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactlist');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('contact/edit', { title: 'Edit Contact', contact: contactToEdit,displayName:req.user?req.user.displayName:'' });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedContact = contact({
        "_id": id,
        "ContactName": req.body.ContactName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress,
    });
    console.log('req.body.price' , req.body)
    contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //console.log(bookList);
            res.redirect('/contactlist');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactlist');
        }
    });
}