import ApiController from '../controller/api'
import Router from 'koa-router'
const Api = new Router();

Api.get('/userlist', ApiController.userlist);
Api.post('/createarticle', ApiController.createArticle);
Api.get('/articlelist', ApiController.articlelist);

export default Api