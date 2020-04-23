const db = require('../config/db.config.js');

var characterModel = require('../model/charactersmodel.js');

exports.insert = (req,res) => {
    characterModel.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        age : req.body.age
    }).then ( character => {
        console.log(`New character has been created.`);
        res.send(character);
    });
};


exports.findAll = (req, res) => {
    characterModel.findAll().then(character => {
        res.send(character);
    });
};

exports.findByPk = (req,res) => {
    var id = req.params.id;
    characterModel.findByPk(id).then(function(character){
        res.send(character);
    });
};

exports.update = ( req, res ) => {
    characterModel.update({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        age : req.body.age
    },
    { where: { id : req.params.id } }
    ).then(() => {
        res.status(200).send("Updated successfully a character of age " + id);
    });
};

exports.delete = (req,res) => {
    const id = req.body.id;
    characterModel.destroy({
        where: { id : req.params.id }
    }).then(() => {
        res.status(200).send('Deleted successfully a character of age = ' + age);
    });
};
