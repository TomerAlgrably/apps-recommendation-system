const router = require('express').Router();
const categories = require('../db/categories.json');
router.get('/', (req, res) => {
    res.status(200).json(categories);
})

module.exports = router;