const express  = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const config = require('./config');

const app = express();

const proxyOptions = {
    target: config.apiBaseUrl,
    pathRewrite: {'^/proxy' : ''},
    onProxyReq: (proxyReq, req, res) => {
        config.apiRequiredHeaders.forEach(header => {
            proxyReq.setHeader(header.name, header.value);
        });
    },
    logLevel: config.logLevel,
    changeOrigin: true
}

app.use('/proxy', createProxyMiddleware(proxyOptions));

app.listen(config.port);