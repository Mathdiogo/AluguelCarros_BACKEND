import { Request, Response } from "express"; 
import { CarsDto } from "../Dto/CarsDto";
import { GetListService } from "../Services/GetListService";
import { GetListTransformer } from "../Transformer/GetListTransformer";
import { CardListDto } from "../Dto/CardListDto";



export class GetListCarsController {
    constructor(
        private readonly transformer: GetListTransformer, // Transformer aqui
        private readonly service: GetListService
    ){}
    public async active(req: Request, res: Response): Promise<any> {
    try  {
        let dto = <any> await this.transformer.fromScreen(req.params)
        dto = await this.service.invoke(dto);
        console.log(dto)
        const response = <CardListDto>  await this.transformer.toScreen(dto)
        return res.status(200).send(response);
    } catch(e) {
        console.error(e)
    }
}
}
