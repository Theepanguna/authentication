let express = require('express');
let router = express.Router();
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index',{title:'A'})
}