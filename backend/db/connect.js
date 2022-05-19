const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log('connecting top mongoDB..'));
};

module.exports = connectDB;
