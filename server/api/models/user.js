import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import token from '../token.js';

const hashCode = (s) => s.split("").reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    a & a;
}, 0);

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    session: {
        type: Date,
        required: true
    },
    language: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        validate: [function(email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        }, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    pseudo: {
        type: String
    },
    bio: {
        type: String
    },
    mood: {
      type: String,
      required : true,
      default : "img/smileys/cool.png"
    }
});

userSchema.methods.comparePassword = function(pwd, cb) {
    bcrypt.compare(pwd, this.password, function(err, isMatch) {
        if (err) cb(err);
        cb(null, isMatch);
    });
};

let model = mongoose.model('User', userSchema);

export default class User {

    connect(req, res) {
      console.log(req.body);
        if (!req.body.email) {
            res.status(400).send('Please enter an email');
        } else if (!req.body.password) {
            res.status(400).send('Please enter a password');
        } else if (!req.body.mood) {
            res.status(400).send('Please choose a mood');
        } else {
            model.findOneAndUpdate({
                email: req.body.email
            }, {
                mood: req.body.mood
            }, {
                new: true
            },
            (err, user) => {
                if (err || !user) {
                    res.sendStatus(403);
                } else {
                    user.comparePassword(req.body.password, (err, isMatch) => {
                        if (err) {
                            res.sendStatus(400);
                        } else {
                            if (isMatch) {
                                user.password = null;
                                let tk = jsonwebtoken.sign(user, token, {
                                    expiresIn: "24h"
                                });
                                res.json({
                                    success: true,
                                    user: user,
                                    token: tk
                                });
                            } else {
                                res.send();
                            }
                        }
                    });
                }
            });
        }
    }

    findAll(req, res) {
        model.find({}, {
            password: 0
        }, (err, users) => {
            if (err || !users) {
                res.sendStatus(403);
            } else {
                res.json(users);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.userId, {
            password: 0
        }, (err, user) => {
            if (err || !user) {
                res.sendStatus(500);
            } else {
                res.json(user);
            }
        });
    }

    create(req, res) {
        if (req.body.password) {
            var salt = bcrypt.genSaltSync(10);
            req.body.password = bcrypt.hashSync(req.body.password, salt);
        }
        model.create(req.body,
            (err, user) => {
                if (err || !user) {
                    if (err.code === 11000 || err.code === 11001) {
                        err.message = "Email " + req.body.email + " already exist";
                    }
                    res.status(500).send(err.message);
                } else {
                    let tk = jsonwebtoken.sign(user, token, {
                        expiresIn: "24h"
                    });
                    res.json({
                        success: true,
                        user: user,
                        token: tk
                    });
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.userId
        }, req.body, (err, user) => {
            if (err || !user) {
              res.status(500).send(err.message);
            } else {
                let tk = jsonwebtoken.sign(user, token, {
                  expiresIn: "24h"
                });
                res.json({
                  success: true,
                  user: user,
                  token: tk
                });
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.userId, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
