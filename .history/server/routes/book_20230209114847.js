let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our books model
let Book = require('../models/books');
let bookController = require('../controllers/book');
//GET ROUTE for the book list page -READ OPERATION
router.get('/', bookController.displayBookList);

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get('/add', bookController.displayAddPage);

/* POST Route for processing the Add Page - CREATE operation*/

router.post('/add',bookController.processAddPage );

/*GET Route for displaying the Edit page - UPDATE operation*/

router.get('/edit/:id', bookController.displayEditPage);

/*POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', bookController.processEditPage );

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', );

module.exports = router;