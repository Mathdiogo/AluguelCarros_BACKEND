export const seedData = async () => {
    if (!db) {
        throw new Error('Database connection error');
    }

    const carsCollection = db.collection('cars');

    const cars = [
        { make: 'Toyota', model: 'Corolla', year: 2020 },
        { make: 'Honda', model: 'Civic', year: 2019 },
        { make: 'Ford', model: 'Mustang', year: 2021 },
        { make: 'Chevrolet', model: 'Camaro', year: 2022 }
    ];

    try {
        await carsCollection.insertMany(cars);
        console.log('Seed data inserted successfully');
    } catch (e) {
        console.log(e, 'Error inserting seed data');
    }
};