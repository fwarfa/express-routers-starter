const express = require('express');

// setup an array to store my book objects
const bookList = [];

// Make a router
// A router is like a mini-app
const router = express.Router();

// We can use a router just like we use app
// the actual URL here is "/book"
router.get('/', (req,res) => {
    res.send(bookList);
})

//the actual URL is here is
// http://localhost:5000/book/first
router.get('/first', (req,res) => {
    res.send(bookList[0]);
})

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

// Export our books 'mini app'
module.exports = router;