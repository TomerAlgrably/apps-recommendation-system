const router = require('express').Router();
const { calculateAge } = require('../utils');
const apps = require('../db/apps.json');

router.post('/', (req, res) => {
    const age = calculateAge(req.body.birthday);
    if (isNaN(age)) {
        res.status(400).json({error: "Birthdate is not valid"});
    }
    if (isNaN(req.body.min_rating) ||  req.body.min_rating < 1 || req.body.min_rating > 5) {
        res.status(400).json({error: "Minimum rating is not valid"});
    }

    if (req.body.categories.length < 3) {
        res.status(400).json({error: "Please select 3 categories at minimum"});
    }

    const categories = req.body.categories.map(x=>x.value);
    // Individual calculations for reference
    // const filterCat = apps.filter((app) => req.body.categories.includes(app.category));
    // const filterAge = filterCat.filter((app) => app.min_age < age);
    // const filterRank = filterAge.filter((app) => app.rating >= req.body.minrank);
    const filteredResults = apps.filter((app) => categories.includes(app.category) 
                                             && app.min_age < age 
                                             && app.rating >= req.body.min_rating);
    res.status(200).json(filteredResults);
})

module.exports = router;