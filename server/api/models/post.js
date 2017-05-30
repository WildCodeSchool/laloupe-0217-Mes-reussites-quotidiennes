import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  content: {
      type: String
  },
  created_at: {
      type: Date,
      default: Date.now
  },
<<<<<<< 2e0ef6bf5e8a420a5996311165b51244c29a3f9e
  student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
=======
>>>>>>> Now we can delete a post from the DB
  updated_at: {
      type: Date,
      default: Date.now
  }
});

let model = mongoose.model('Post', postSchema);

export default class Post {

  findAll(req, res) {
<<<<<<< 2e0ef6bf5e8a420a5996311165b51244c29a3f9e
    model.find({})
    .populate('student', {password: 0, __v: 0})
    .exec((err, posts) => {
      if (err || !posts) {
        res.sendStatus(403);
      } else {
        res.json(posts);
      }
    });
  }

  findUserPost(req, res) {
    model.find({student:req.params.userId})
    .populate('student', {password: 0, __v: 0})
    .exec((err, posts) => {
=======
    model.find({}, (err, posts) => {
>>>>>>> Now we can delete a post from the DB
      if (err || !posts) {
        res.sendStatus(403);
      } else {
        res.json(posts);
      }
    });
  }
<<<<<<< 2e0ef6bf5e8a420a5996311165b51244c29a3f9e

  create(req, res) {
    console.log('body', req.body);
=======
  create(req, res) {
>>>>>>> Now we can delete a post from the DB
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
