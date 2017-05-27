const mongoose = require('mongoose');
mongoose.connect('mongodb://administrator:admin@ds155651.mlab.com:55651/blrnews');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connection success');
});

const articles = new mongoose.Schema({
    image: String,
    title: String,
    tags: [String],
    section: String,
    summary: String,
    content: String,
    createdAt: Date,
    author: String,
});
const users = new mongoose.Schema({
    username: String,
    password: String
});


module.exports.ArticleModel = db.model('articleModel', articles);
module.exports.UserModel = db.model('userModel', users);
