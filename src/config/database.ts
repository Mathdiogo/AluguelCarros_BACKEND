import {MongoClient, ServerApiVersion} from 'mongodb'

const uri: string = "mongodb+srv://enzzo2015:1ZhNYJwNaK03u9ui@back-cars.isjkzkz.mongodb.net/?retryWrites=true&w=majority&appName=back-cars";
const dbName: string = 'cars'
let db: any;
export const connectDataBase = async () => {
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      try {

        await client.connect()
        db = client.db(dbName)
        console.log('Conectou ao mongodb');

      } catch(e) {
        console.log(e, 'Error ao conectar no mongo db')
      } 
}

export const useDb = () => {
    if(!db) {
        throw new Error('erro na conexao do banco de dados para usar')
    }
    return db
}

export const seedData = async () => {
    if (!db) {
        throw new Error('Database connection error');
    }

    const carsCollection = db.collection('cars');

    const categories = [
        {
            name: 'SUV',
            models: [
                { make: 'Toyota', model: 'RAV4', year: 2020, motor: '2.5L', pricePerDay: 100, pricePerMonth: 2500, rented: false },
                { make: 'Honda', model: 'CR-V', year: 2019, motor: '1.5L', pricePerDay: 90, pricePerMonth: 2300, rented: false },
                { make: 'Ford', model: 'Escape', year: 2021, motor: '2.0L', pricePerDay: 110, pricePerMonth: 2700, rented: false }
            ]
        },
        {
            name: 'ESPORTIVOS',
            models: [
                { make: 'Chevrolet', model: 'Camaro', year: 2022, motor: '6.2L', pricePerDay: 150, pricePerMonth: 4000, rented: false },
                { make: 'Ford', model: 'Mustang', year: 2021, motor: '5.0L', pricePerDay: 140, pricePerMonth: 3800, rented: false }
            ]
        },
        {
            name: 'CAMINHONETE',
            models: [
                { make: 'Toyota', model: 'Hilux', year: 2020, motor: '2.8L', pricePerDay: 120, pricePerMonth: 3000, rented: false },
                { make: 'Ford', model: 'Ranger', year: 2021, motor: '3.2L', pricePerDay: 130, pricePerMonth: 3200, rented: false }
            ]
        }
    ];

    try {
        for (const category of categories) {
            for (const car of category.models) {
                await carsCollection.insertOne({
                    ...car,
                    category: category.name
                });
            }
        }

        console.log('Seed data inserted successfully');
    } catch (e) {
        console.log(e, 'Error inserting seed data');
    }
};


