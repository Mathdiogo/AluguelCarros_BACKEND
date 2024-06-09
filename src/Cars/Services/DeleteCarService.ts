import { CarRentedDto } from "../Dto/CarRentedDto";
import { useDb } from "../../config/database";
import { ObjectId } from "mongodb"; // Importe o ObjectId do pacote mongodb
import { DeleteCarDto } from "../Dto/DeleteCarDto";

export class DeleteCarService {
    constructor(){}

    public async invoke(dto: DeleteCarDto): Promise<void> {
        const db = useDb();

        // Converta a numeração do ID para um ObjectId
        const objectId = new ObjectId(dto.id);

        const car = await db.collection('cars').findOne({ _id: objectId });

        if (!car) {
            console.log(`Nao achou ${dto.id} o carro`);
            return;
        }

        return await db.collection('cars').deleteOne(
            { _id: objectId },
          
        );

        
    }
}
