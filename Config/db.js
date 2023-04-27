const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser : true,
      useCreateIndex : true,
      useFindAndModify : true,
      useUnifiedTopology : true
    });

    console.log('Mongo db connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
