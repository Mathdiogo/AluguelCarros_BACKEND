import { Request, Response } from "express"; 
import { CarsDto } from "../Dto/CarsDto";
import { CardListDto } from "../Dto/CardListDto";
import { PatchCarRentedService } from "../Services/PatchCarRentedService";
import { PatchCarRentedTransformer } from "../Transformer/PatchCarRentedTransformer";
import { DeleteCarTransformer } from "../Transformer/DeleteCarTransformer";
import { DeleteCarService } from "../Services/DeleteCarService";



export class DeleteCarController {
    constructor(
        private readonly transformer: DeleteCarTransformer,
        private readonly service: DeleteCarService
    ){}
    public async active(req: Request, res: Response): Promise<any> {
    try  {
        let dto = <any> await this.transformer.fromScreen({...req.params})
        dto = await this.service.invoke(dto);
        return res.status(204).send();
    } catch(e) {
        console.error(e)
    }
}
}
