import mongoose from 'mongoose';

const badgeSchema = new mongoose.Schema({
  name: String,

  url: String
});


let model = mongoose.model('Badge', badgeSchema);

export default class Badge {

  findAll(req, res) {
    model.find({}, (err, badges) => {
      if (err || !badges) {
        res.sendStatus(403);
      } else {
        res.json(badges);
      }
    });
  }
  create(req, res) {
    model.create(req.body, (err, badges) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(badges);
      }
    });
  }
  update(req, res) {
    model.findByIdAndUpdate(req.params.id, req.body, (err, badges) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(badges);
      }
    });
  }
}
