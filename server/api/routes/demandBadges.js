import express from 'express';
import DemandBadge from '../models/demandBadge.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var demand = new DemandBadge();


    router.post('/', Auth.hasAuthorization, demand.create);

    app.use('/demandBadges', router);

};
