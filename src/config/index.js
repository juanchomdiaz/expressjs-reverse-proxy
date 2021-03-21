import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    debug: process.env.DEBUG,
    apiBaseUrl = process.env.API_BASE_URL,
    apiRequiredHeaders = JSON.parse(process.env.API_REQUIRED_HEADERS)
};

export default config;