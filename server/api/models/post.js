import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  content: {
      type: String
  },
  created_at: {
      type: Date,
      default: Date.now
  },
  updated_at: {
      type: Date,
      default: Date.now
  }
});

let model = mongoose.model('Post', postSchema);

export default class Post {

  findAll(req, res) {
    model.find({}, (err, posts) => {
      if (err || !posts) {
        res.sendStatus(403);
      } else {
        res.json(posts);
      }
    });
  }
  create(req, res) {
    model.create(req.body, (err, posts) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(posts);
      }
    });
  }

  update(req, res) {
    model.findByIdAndUpdate(req.params.id, req.body, (err, posts) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(posts);
      }
    });
  }

  delete(req, res) {
      model.findByIdAndRemove(req.params.id, (err) => {
          if (err) {
              res.status(500).send(err.message);
          } else {
              res.sendStatus(200);
          }
      });
  }
}
