import jsonwebtoken from 'jsonwebtoken';
import token from '../token.js';

export default {

    hasAuthorization: (req, res, next) => {
        if (req.headers.authorization) {
            jsonwebtoken.verify(req.headers.authorization, token, (err, decoded) => {
                if (err) {
                    return res.sendStatus(403);
                } else {
                    next();
                }
            });
        } else {
            return res.sendStatus(403);
        }
    },

    isAdministrator: (req, res, next) => {
        if (req.headers.authorization) {
            jsonwebtoken.verify(req.headers.authorization, token, (err, decoded) => {
                if (decoded._doc && decoded._doc.isAdmin) {
                    next();
                } else {
                    return res.sendStatus(403);
                }
            });
        } else {
            return res.sendStatus(401);
        }
    },

    // vérifie que l'userId qui provient de la route et le meme que l'id de l'utilisateur connecté
    isOwnUser: (req, res, next) => {
        if (req.headers.authorization) {
            jsonwebtoken.verify(req.headers.authorization, token, (err, decoded) => {
              console.log(decoded._doc, req.params, decoded._doc._id === req.params.userId);
                if (decoded._doc && (decoded._doc._id === req.params.userId)) {
                    next();
                } else {
                    return res.sendStatus(403);
                }
            });
        } else {
            return res.sendStatus(401);
        }
    }
};
