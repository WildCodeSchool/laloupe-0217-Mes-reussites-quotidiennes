import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  content: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  likes: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    smiley: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Smiley',
      required: true
    }
  }]
});

let model = mongoose.model('Post', postSchema);

export default class Post {

  findAll(req, res) {
    model.find({})
      .populate('student', {
        password: 0,
        __v: 0
      })
      .populate('likes.smiley')
      .exec((err, posts) => {
        if (err || !posts) {
          res.sendStatus(403);
        } else {
          res.json(posts);
        }
      });
  }

  findUserPost(req, res) {
    model.find({
        student: req.params.userId
      })
      .populate('student', {
        password: 0,
        __v: 0
      })
      .populate('likes.smiley')
      .exec((err, posts) => {
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

  createLike(req, res) {
    model.update({
      _id: req.params.id,
      likes: {
        $not: {
          $elemMatch: {
            student: req.body.student,
          }
        }
      }
    }, {
      $push: {
        likes: {
          student: req.body.student,
          smiley: req.body.smiley
        }
      }
    }, {
      new: true
    }).exec((err, post) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(post);
      }
    })
  }
}
