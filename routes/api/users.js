const express = require('express');
const router = express.Router();

// @route Get api/users/test
// @desc  Tests post route
// @access Public
router.get('/test', (req, res) => {
    res.send('here is users')
});

module.exports = router;
