import express from 'express';
import Badge from '../models/badge.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var badge = new Badge();

    router.get('/', badge.findAll);
    router.post('/', badge.create);
    router.put('/:id', badge.update);

    app.use('/badges', Auth.hasAuthorization, router);

};
