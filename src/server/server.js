const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.send({ hello: 'Hello', world: 'World'});
});

const server = app.listen(3000, () => {
    console.log(`Server listen on port http://localhost:${server.address().port}`);
});