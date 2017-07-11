import mongoose from 'mongoose';
import User from './user.js';
var user = new User();


const demandSchema = new mongoose.Schema({
    badge: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Badge'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    },
    vote: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }]
});


let model = mongoose.model('DemandBadge', demandSchema);

export default class DemandBadge {

    create(req, res) {
        let student = (req.body.student),
            badge = (req.body.badge);
        model.update({
                student: student,
                badge: badge
            }, //premier argument pour vérifier qu'il existe
            {
                $setOnInsert: {
                    student: student,
                    badge: badge
                }
            }, //argument pour insérer
            {
                upsert: true
            }, //si ne trouve pas = pour insérer
            (err, demand) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.json(demand);
                }
            });
    }

    vote(req, res) {
        model.update({
                _id: req.params.id,
                vote: {
                    $ne: req.body.user
                }
            }, {
                $addToSet: {
                    vote: req.body.user
                }
            },
            (err, demand) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.json(demand);
                }
            });
    }

    findAll(req, res) {
        model.find({})
            .populate('badge')
            .populate('student', {
              password: 0,
              __v: 0
            })
            .exec((err, demandsBadge) => {
                if (err || !demandsBadge) {
                    res.sendStatus(403);
                } else {
                    user.model.find({}).exec((err, users) => {
                        res.json(demandsBadge.filter((demande) => {
                            return demande.vote.length / users.length < 0.6;
                        }));
                    });
                }
            });
    }

    completed(req, res) {
        model.find({student: req.params.user})
            .populate('badge')
            .populate('student', {
              password: 0,
              __v: 0
            })
            .exec((err, demandsBadge) => {
                if (err || !demandsBadge) {
                    res.sendStatus(403);
                } else {
                  console.log(demandsBadge);
                    user.model.find({}).exec((err, users) => {
                        res.json(demandsBadge.filter((demande) => {
                            return demande.vote.length / users.length >= 0.6;
                        }));
                    });
                }
            });
    }
}
