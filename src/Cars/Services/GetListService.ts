import { useDb } from "../../config/database";
import { CarsDto } from "../Dto/CarsDto";

export class GetListService {
    constructor(){}
    public async invoke(dto: CarsDto): Promise<CarsDto> {
        const db = useDb();
        const collection = db.collection("cars");
        const cars = await collection.find().toArray();
        return cars;
    }
}