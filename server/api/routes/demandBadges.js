import express from 'express';
import DemandBadge from '../models/demandBadge.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var demand = new DemandBadge();

    router.post('/', demand.create);
    router.get('/', demand.findAll);
    router.put('/:id', demand.vote);
    router.get('/:user', demand.completed);

    app.use('/demandBadges', Auth.hasAuthorization, router);

};
