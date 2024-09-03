/** @type {import('next').NextConfig} */

// const config = require('./config.js')
import config  from './config.js'
const nextConfig = {
  env: {
    DB_URI: config.DB_URI,
  }
};

export default nextConfig;
