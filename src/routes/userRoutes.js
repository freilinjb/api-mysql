module.exports = function(app) {
    app.get('/', (req, res) => {
        res.json([]);
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