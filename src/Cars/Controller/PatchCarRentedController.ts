import { Request, Response } from "express"; 
import { CarsDto } from "../Dto/CarsDto";
import { CardListDto } from "../Dto/CardListDto";
import { PatchCarRentedService } from "../Services/PatchCarRentedService";
import { PatchCarRentedTransformer } from "../Transformer/PatchCarRentedTransformer";



export class PatchCarRentedController {
    constructor(
        private readonly transformer: PatchCarRentedTransformer,
        private readonly service: PatchCarRentedService
    ){}
    public async active(req: Request, res: Response): Promise<any> {
    try  {
        console.log(req.body)
        let dto = <any> await this.transformer.fromScreen({...req.body, ...req.params})
        console.log(dto)
        dto = await this.service.invoke(dto);
        return res.status(204).send();
    } catch(e) {
        console.error(e)
    }
}
}
