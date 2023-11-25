require('dotenv').config(); 
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
require('./models/Persona.model.js');

const mongoConenction = async() => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  mongoConenction
}