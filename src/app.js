const express  = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const config = require('./config');

const app = express();


const proxyOptions = {
    target: config.apiBaseUrl,
    pathRewrite: {'^/api' : ''},
    onProxyReq: (proxyReq, req, res) => {
        config.apiRequiredHeaders.forEach(header => {
            proxyReq.setHeader(header.name, header.value);
        });
    },
    changeOrigin: true
}

app.use('/api', createProxyMiddleware(proxyOptions));

app.listen(config.port);