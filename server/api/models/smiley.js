import mongoose from 'mongoose';

const smileySchema = new mongoose.Schema({
  image: String,

  name: String,
});

let model = mongoose.model('Smiley', smileySchema);

export default class Smiley {

  findAll(req, res) {
    model.find({})
      .exec((err, smileys) => {
        if (err || !smileys) {
          res.sendStatus(403);
        } else {
          res.json(smileys);
        }
      });
  }
}
