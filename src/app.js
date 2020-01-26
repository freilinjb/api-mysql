const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
require('./routes/userRoutes')(app);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});