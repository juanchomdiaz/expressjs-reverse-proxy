import dotenv from 'dotenv';

dotenv.config();

const aws = require('aws-sdk');

/* READING VARS FROM HEROKU ENVIRONMENT */
let s3 = new aws.S3({
  apiBaseUrl = process.env.API_BASE_URL,
  apiRequiredHeaders: process.env.API_REQUIRED_HEADERS,
  port: process.env.PORT,
  logLevel: process.env.LOG_LEVEL,
  allowedOrigins: process.env.ALLOWED_ORIGINS
});

const config = {
    port: s3.port || process.env.PORT,
    logLevel: s3.logLevel || process.env.LOG_LEVEL,
    apiBaseUrl = s3.apiBaseUrl || process.env.API_BASE_URL,
    apiRequiredHeaders = JSON.parse(s3.apiRequiredHeaders || process.env.API_REQUIRED_HEADERS),
    allowedOrigins: s3.allowedOrigins || process.env.ALLOWED_ORIGINS
};

export default config;