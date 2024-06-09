import { CarsDto } from "../Dto/CarsDto";
import { useDb } from "../../config/database";
import { ObjectId } from "mongodb";

export class PostCreateCarService {
    constructor() {}

    public async invoke(dto: CarsDto): Promise<void> {
        const db = useDb();
        console.log(dto)
        const carCollection = db.collection('cars');
        await carCollection.insertOne(dto);
    }
}
