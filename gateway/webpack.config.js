const Dotenv = require('dotenv-webpack');
const path = require('path');

const enviroment = process.env.NODE_ENV || 'dev';

module.exports = {
  mode: "development",
  entry: "./client.js",
  output: {
    filename: "main.js"
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `.env.${enviroment}`)
    }),
  ],
};
