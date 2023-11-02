const mongoose = require('mongoose');

//  Récuperation de la classe Schema de mongoose
const Schema = mongoose.Schema;

// Création du Schema pour la collection Cars
const CarSchema = new Schema({
    id:String,
    name: String,
    options: {
        aircondition: Boolean,
        navigation: Boolean,
        transmission: {type: String, default: 'automatique'},
        person: Number
    },
    image: String,
    price: Number,
    reservations: Number
});

// Création du modèle qui prend en paramètre le schéma que nous venons de créer
const CarModel = mongoose.model('car', CarSchema);

// Export du modèle pour pouvoir l'utiliser dans le controller
module.exports = CarModel;