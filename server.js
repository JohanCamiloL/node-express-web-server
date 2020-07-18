const express = require('express');
const app = express();

const PORT_NUMBER = 8000;

app.listen(PORT_NUMBER, () => {
    console.log('Server is listening on port ' + PORT_NUMBER);
});