const express = require('express');
const dotenv = require('dotenv');
import webpack from 'webpack';
import helmet from 'helmet';
import React from 'react';
// to server strings on server-side
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// receive the routes array to render
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import initialState from '../frontend/initialState';
import Layout from '../frontend/components/Layout';
import getManifest from './getManifest';


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
}   else {
    //manifest middleware
    app.use((req, res, next) => {
        if (!req.hashManifest) req.hashManifest = getManifest();
        next();
    })
    app.use(express.static(`${__dirname}/public`));
    // Helmet helps you secure your Express apps by setting various HTTP headers.
    // Settings by default
    app.use(helmet());
    // In short: Helmet’s crossdomain middleware prevents Adobe Flash and Adobe Acrobat from loading content on your site.
    app.use(helmet.permittedCrossDomainPolicies());
    // The Hide Powered-By middleware removes the X-Powered-By header to make it slightly harder for attackers to see what potentially-vulnerable technology powers your site.
    app.disable('x-powered-by');
}
const setResponse = (html, preloadedState, manifest) => {
    const mainStyles = manifest ? manifest['main.css'] : "assets/app.css";
    const mainBuild = manifest ? manifest['main.js'] : "assets/app.js"
    const vendorBuild = manifest ? manifest['vendors.js'] : "assets/vendor.js"
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="${mainStyles}" type="text/css">
        <title>Platzi Video</title>
    </head>
    <body>
        <div id="app">${html}</div>
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
            )}
      </script>
        <script src="${mainBuild}" type="text/javascript"></script>
        <script src="${vendorBuild}" type="text/javascript"></script>
    </body>
    </html>
    `);
};

const renderApp = (req, res) => {
    const store = createStore(reducer, initialState);
    const preloadedState = store.getState();
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <Layout>{renderRoutes(serverRoutes)}</Layout>
            </StaticRouter>
        </Provider>,
    );
    res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get('*', renderApp);

const server = app.listen(PORT, () => {
        console.log(`Server listen on port http://localhost:${server.address().port}`);
});