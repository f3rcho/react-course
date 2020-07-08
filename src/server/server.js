const express = require('express');
const dotenv = require('dotenv');
import webpack from 'webpack';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
    console.log('Development config');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port: PORT, hot: true };

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
}


app.get('*', (req, res) => {
    res.send({ hello: 'Hello', world: 'World'});
});

const server = app.listen(PORT, () => {
    console.log(`Server listen on port http://localhost:${server.address().port}`);
});