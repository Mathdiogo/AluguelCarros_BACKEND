import { Request, Response } from "express"; 
import { CarsDto } from "../Dto/CarsDto";
import { CardListDto } from "../Dto/CardListDto";
import { PatchCarRentedService } from "../Services/PatchCarRentedService";
import { PatchCarRentedTransformer } from "../Transformer/PatchCarRentedTransformer";
import { PostCreateCarTransformer } from "../Transformer/PostCreateCarTransformer";
import { PostCreateCarService } from "../Services/PostCreateCarService";




export class PostCreateCarController {
    constructor(
        private readonly transformer: PostCreateCarTransformer,
        private readonly service: PostCreateCarService
    ){}

    public async active(req: Request, res: Response): Promise<any> {
        try  {
            let dto = <any> await this.transformer.fromScreen({...req.body})
            dto = await this.service.invoke(dto);
            return res.status(200).send();
        } catch(e: any) { 
            console.error(e);
            return res.status(500).send({ error: e.message });
        }
    }
}

