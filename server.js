const express = require('express');
const routes = require('./config/routes');

const app = express();

const PORT_NUMBER = 8000;

routes(app);

app.listen(PORT_NUMBER, () => {
    console.log('Server is listening on port ' + PORT_NUMBER);
});