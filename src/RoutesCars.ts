import { Router } from 'express';
import { deleteCarController, getListCarsController, postCreateCarController, updateRentedCarController } from './Cars';
const routerCars = Router();

routerCars.get('/list', (req, res) => {
    return getListCarsController.active(req, res)
});

routerCars.patch('/rent/:id/:email', (req, res) => {
   return updateRentedCarController.active(req, res)
});

routerCars.delete('/delete/:id', (req, res) => {
    return deleteCarController.active(req, res)
})

routerCars.post('/create', (req, res) => {
    return postCreateCarController.active(req, res)
})






export { routerCars };
