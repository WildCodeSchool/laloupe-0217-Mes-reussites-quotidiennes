import express from 'express';
import Post from '../models/post.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var post = new Post();

    router.get('/', post.findAll);
    router.post('/', Auth.isOwnUser, post.create);
    router.put('/:id/like', Auth.hasAuthorization, post.createLike);
    router.put('/:id', Auth.isOwnUser, post.update);
    router.delete('/:id', Auth.isOwnUser, post.delete);

    app.use('/posts', router);

};
