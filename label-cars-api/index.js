// Chargement du module express
const express = require('express');

// Création du serveur via express
const server = express();

// Chargement du module mongoose
const mongoose = require('mongoose');

// Chargement des routes
const routes = require('./routes');

const cors = require('cors');

server.use(cors());
// Indispensable pour recevoir des données (dans le body de la requête) d'une requête autre que GET
server.use(express.json());


server.listen(5500, () => {
    console.log('Serveur lancé et écoute sur le port 5500');


// Connexion à la base test de notre serveur MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/label-cars');

const db = mongoose.connection;

// once -> une fois que

db.once('open', () => console.log("Connexion au serveur et à la base OK !"))
.on ('error', error => console.error("Problème durant la connexion à la base de donnees",error));
});

// Utilisation des routes précédemment chargées
routes(server);

