const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');

//Config

dotenv.config({ path: 'backend/config/config.env' });

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
