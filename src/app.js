const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { handleCors } = require('./helpers/handleCORS');

const { config } = require("./config");

const app = express();

handleCors(app);

const proxyOptions = {
  target: config.apiBaseUrl,
  pathRewrite: { "^/*": "" },
  onProxyReq: (proxyReq, req, res) => {
    config.apiRequiredHeaders.forEach((header) => {
      proxyReq.setHeader(header.name, header.value);
    });
  },
  logLevel: config.logLevel,
  changeOrigin: true,
};

app.use("/", createProxyMiddleware(proxyOptions));

app.listen( config.port , () => console.log( `Started server on port ${config.port}` ) );
