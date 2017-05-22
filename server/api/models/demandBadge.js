import mongoose from 'mongoose';

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
  //creation d'un tableau pour stocker les élèves qui ont déjà voté
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
    model.update(
      {student: student, badge: badge}, //premier argument pour vérifier qu'il existe
      {$setOnInsert: {student: student, badge: badge}}, //argument pour insérer
      {upsert: true}, //si ne trouve pas= pour insérer
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
      .populate('student')
      .exec((err, demandsBadge) => {
        if (err || !demandsBadge) {
          res.sendStatus(403);
        } else {
          res.json(demandsBadge);
        }
      });
  }
}
