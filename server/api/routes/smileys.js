import express from 'express';
import Smiley from '../models/smiley.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var smiley = new Smiley();

    router.get('/',smiley.findAll);
    app.use('/smileys', Auth.hasAuthorization, router);

};
