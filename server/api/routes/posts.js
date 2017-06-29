import express from 'express';
import Post from '../models/post.js';
// import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var post = new Post();

    router.get('/', post.findAll);
    router.get('/:id', post.findById);
    router.post('/', post.create);
    router.put('/:id', post.update);
    router.put('/:id/like', post.createLike);
    router.delete('/:id', post.delete);

    app.use('/posts', router);

};
