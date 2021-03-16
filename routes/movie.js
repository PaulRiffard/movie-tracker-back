const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie");

////////////// ADD ///////////
router.post('/add', async (req, res) => {
     const movie = new Movie({
        title: req.body.movie.title,
        mdb: req.body.movie.mdb,
        director: req.body.movie.director,
        cast: req.body.movie.cast,
        overview: req.body.movie.overview,
        genres: req.body.movie.genres,
        runtime: req.body.movie.runtime,
        release_date: req.body.movie.release_date,
        poster_path: req.body.movie.poster_path,
        
    });
    movie.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        })
});



router.get('/test', (req, res, next) => {
    Movie.find()
        .select("")
        .exec()
        .then(doc => {

            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            }
            else {
                res.status(404).json({ message: "Aucun tache trouvé" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/:id', (req, res, next) => {
    Movie.find({mdb: req.params.id})
        .select("")
        .exec()
        .then(doc => {

            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            }
            else {
                res.status(404).json({ message: "Aucun tache trouvé" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;