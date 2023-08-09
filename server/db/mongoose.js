const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = 'mongodb+srv://tatareddymarolix:a1pjcq9ykdsroseq@cluster0.ptzqraw.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB successfully!');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

module.exports = { mongoose };
