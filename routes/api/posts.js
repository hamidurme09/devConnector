const express = require('express');
const router = express.Router();

// @route Get api/posts/test
// @desc  Tests post route
// @access Public
router.get('/test', (req, res) => {
    res.send('here is posts')
});

module.exports = router;
