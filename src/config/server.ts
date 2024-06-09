import express from 'express'
import {connectDataBase, useDb} from '../config/database'
import { request } from 'http'
import { error } from 'console'
import { routerCars } from '../RoutesCars';
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())


app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
    preflightContinue: false,
}));


// use das rotas 
app.use('/cars', routerCars);

const startServer = async () => {
    await connectDataBase();


    app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
    }); 
}

startServer().catch((error)=> {
    console.error(error)
})