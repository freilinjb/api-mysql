const User = require('../models/user');

module.exports = function(app) {
    app.get('/', (req, res) => {
        User.getUsers((err, data) => {
            res.status(200).json(data);
        });
    });
}

////Otra forma de hacerlo
// const express = require('express');
// const reouter = express.Router();

// router.get('/', (req, res) => {
//     res.json([]);
// });

// //routes


// module.exports = router;