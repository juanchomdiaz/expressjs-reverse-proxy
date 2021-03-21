const dotenv = require('dotenv');
const express  = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const app      = express();
const apiBaseUrl = process.env.API_BASE_URL;
const apiRequiredHeaders = JSON.parse(process.env.API_REQUIRED_HEADERS);

const proxyOptions = {
    target: apiBaseUrl,
    pathRewrite: {'^/api' : ''},
    onProxyReq: (proxyReq, req, res) => {
        apiRequiredHeaders.forEach(header => {
            proxyReq.setHeader(header.name, header.value);
        });
    },
    changeOrigin: true
}

app.use('/api', createProxyMiddleware(proxyOptions));

app.listen(8080);