const CarModel = require('../models/cars');

module.exports = {

    getHome: (req, res) => {
        const links = `
            <ul>
                <li><a href="/cars">Liste des voitures</a></li>
            </ul>
        `;

        res.send(`
            <h1>Bienvenue sur la page d'accueil de l'API label-cars</h1>
            ${links}
        `);
        
    },
    
    getAllCars: (req, res) => {
        CarModel.find().then(cars => {
            res.send(cars);
        }
        )
    },

    getCar: (req, res) => {
        const id=req.params.id
        console.log("récuperation du film avec l'id", id);

        CarModel.findById(id).then(car => {
            res.send(car);
        }
        )
    },

    create(req, res) {
        const car = new CarModel({ ...req.body });

        car.save().then(() => {
            res.send({
                response: `Création de la voiture ${car.name} effectuée !`
            });
        }
        )
    },

    update(req, res) {
        const id=req.body._id;
        if(id){
            CarModel.findByIdAndUpdate(id, req.body).then(car => {
                res.send({
                    response: `Modification de la voiture ${car.name} effectuée !`
                })
            })
        }
    },

    delete(req, res) {
        const id=req.params.id;
        CarModel.findByIdAndRemove(id).then(car => {
            res.send({
                response: `Suppression de la voiture ${car.name} effectuée !`
            });
        }
        )
        
    }
}