var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Change the database connection URL with yours
mailto:mongoose.connect('mongodb+srv://prasanthmarolix:lij1au6ekibgbwaj@cluster0.buix3wg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully!');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

module.exports = { mongoose };
