const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect('mongodb://mongodb:27017/',
            {user: 'user', pass: 'password', dbName: 'homework2'}
        );
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectDb;
