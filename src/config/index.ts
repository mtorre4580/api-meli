const env = process.env.NODE_ENV || 'local';
const config = require(`./${env.toLowerCase()}`).default;

export default config;


