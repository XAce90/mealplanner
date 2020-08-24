const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

// Load models
const Recipe = require('./models/Recipe');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const recipes = JSON.parse(fs.readFileSync(`${__dirname}/_data/recipes.json`, 'utf-8'));

// Import into DB
const importData = async () => {
  try {
    await Recipe.create(recipes);
    console.log(colors.green.inverse('Data imported.'))
  } catch (err) {
    console.error(err);
  }
}

// Delete data
const deleteData = async () => {
  try {
    await Recipe.deleteMany();
    console.log(colors.red.inverse('Data deleted.'))
  } catch (err) {
    console.error(err);
  }
}

if(process.argv[2] === '-i' || process.argv[2] === '--import') {
  importData().then(() => process.exit());
} else if (process.argv[2] === '-d' || process.argv[2] === '--delete') {
  deleteData().then(() => process.exit());
}