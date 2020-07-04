const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const { ENV, PORT } = process.env;

if (ENV === 'development') {
    console.log('Development config');
}

const app = express();

app.get('*', (req, res) => {
    res.send({ hello: 'Hello', world: 'World'});
});

const server = app.listen(PORT, () => {
    console.log(`Server listen on port http://localhost:${server.address().port}`);
});