const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../middleware/restricted-middleware');

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Error getting users from database.' })
    })
})


module.exports = router;