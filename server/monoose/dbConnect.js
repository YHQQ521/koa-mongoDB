import mongoose from 'mongoose'
import UserModel from '../model/UserModel'
import ArticleModel from '../model/ArticleModel'
import TagModel from '../model/TagModel'
import config from '../config/config'

mongoose.connect(config.db.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('db success');
});

module.exports = {
    UserModel,
    ArticleModel,
    TagModel
}