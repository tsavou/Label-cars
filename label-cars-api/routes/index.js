const CarController= require('../controllers/cars')

module.exports=server =>{

    server.get('/', (req, res)=>{
        CarController.getHome(req, res);
    });

    server.get('/cars', (req, res)=>{
        CarController.getAllCars(req, res);

    });

    server.get('/cars/:id', (req, res)=>{
        CarController.getCar(req, res);
    });

    server.post('/cars', (req, res)=>{
        CarController.create(req, res);        
    });

    server.put('/cars', (req, res)=>{
        CarController.update(req, res);
    })

    server.delete('/cars/:id', (req, res)=>{
        CarController.delete(req, res);
    });
}