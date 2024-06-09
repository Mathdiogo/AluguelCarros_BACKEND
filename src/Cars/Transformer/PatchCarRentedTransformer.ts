import { CardListDto } from "../Dto/CardListDto";
import { CarsDto } from "../Dto/CarsDto";
import { CarsListResponse } from "../Response/CarsListResponse";
import { CarsResponse } from "../Response/CarsResponse";
export class PatchCarRentedTransformer {
    constructor(){}


    public async fromScreen(reqScreen: any, header?: any): Promise<any> {
    return {
     id: reqScreen.id,
     rented: reqScreen.rented,
     email: reqScreen.email,
     }
    }


    public async toScreen(dto: CardListDto[]): Promise<CarsListResponse>{
      throw new Error('metodo nao implantado, ou seja nao tem response')
    }
    
}