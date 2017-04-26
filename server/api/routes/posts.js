import express from 'express';
import Post from '../models/post.js';

let router = express.Router();

module.exports = (app) => {

    var post = new Post();

    router.get('/', post.findAll);
    router.post('/', post.create);
    router.put('/:id', post.update);
    router.delete('/:id', post.delete);

    app.use('/posts', router);

};