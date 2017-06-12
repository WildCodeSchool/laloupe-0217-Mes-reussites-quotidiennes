import express from 'express';
import User from '../models/user.js';
import Auth from '../middlewares/authorization.js';
import Post from '../models/post.js';

let router = express.Router();

module.exports = (app) => {

    app.get('/token_status', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    var user = new User();
    var post = new Post();

    app.post('/login', user.connect);

    router.get('/', Auth.hasAuthorization, user.findAll);

    router.get('/:userId/posts', Auth.hasAuthorization, post.findUserPost);

    router.get('/:userId', Auth.hasAuthorization, user.findById);

    router.post('/', user.create);

    router.put('/:userId', Auth.isOwnUser, user.update);

    router.delete('/:userId', Auth.isAdministrator, user.delete);

    app.use('/users', router);

};
