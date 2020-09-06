const router = require('express').Router();
const sequelize = require('../config/connection');
// require models

// get all for homepage
router.get('/', (req, res) => {
    res.render('homepage')
});

module.exports = router;