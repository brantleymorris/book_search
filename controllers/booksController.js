const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Book
            .find()
            .limit(10)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: (req, res) => {
        db.Book
            .findById({_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Book
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};