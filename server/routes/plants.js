var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
    models.plant.findAll({
            raw: true
        })
        .then(plants => {
            res.json(plants);
        });
    // var plants = [{
    //   userImageUrl: "",
    //   wikiImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Celosia_spicata.jpg/333px-Celosia_spicata.jpg",
    //   name: "Celosia",
    //   datePosted: "11h ago",
    //   wikiDescription: "This is my description",
    //   type: "Seed",
    //   email: "",
    //   phone: "",
    //   address: "",
    //   city: "",
    //   state: "",
    //   zipCode: ""
    // },
    // {
    //   userImageUrl: "",
    //   wikiImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tuberose_flower.jpg/333px-Tuberose_flower.jpg",
    //   name: "Tuberose",
    //   datePosted: "22h ago",
    //   wikiDescription: "Polianthes tuberosa, the tuberose, is a perennial plant related to the agaves, extracts of which are used as a note in perfumery.",
    //   type: "Bulb",
    //   email: "",
    //   phone: "",
    //   address: "",
    //   city: "",
    //   state: "",
    //   zipCode: ""
    // }];
});

router.get('/test', function(req, res, next) {
    // console.log(models);
    models.sequelize.sync()
        .then(() => models.plant.create({
            userImageUrl: "",
            wikiImageUrl: "",
            name: "Japanese Maple",
            wikiDescription: "Some Text here",
            type: "Cutting",
            email: "astanely86@gmail.com",
            phone: 9134880886,
            address: "",
            city: "",
            state: "",
            zipCode: null
        }))
        .then(plant => {
            console.log(plant.toJSON());
            res.json(plant);
        })
        .catch(
            error => res.status(500).send("Andrew's Error: " + error)
        )
        // res.json('hmm');
});

module.exports = router;