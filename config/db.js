const mongoose = require('mongoose');
const local = "mongodb+srv://root:Nhutren123@cluster0.9rgefph.mongodb.net/Tree";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
