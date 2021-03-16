const express = require('express');
const router = express.Router();
const List = require("../models/List");


////////////// ADD ///////////
router.post('/add', async (req, res) => {
    console.log(req.body)
    const list = new List({
       name: req.body.list.name,
       created_by: req.body.list.created_by,
       movie: req.body.movie,
       created_at: req.body.created_at
   });
   list.save()
       .then(data => {

           res.json(data);
           console.log(data._id)
       })
       .catch(err => {
           res.json({ message: err })
       })
});



// GET ALL LISTS BY ID

router.get('/:id', (req, res, next) => {
    List.find({ created_by: req.params.id })
        .select("")
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            }
            else {
                res.status(404).json({ message: "Aucun Listes trouvé" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;