import { CardListDto } from "../Dto/CardListDto";
import { CarsDto } from "../Dto/CarsDto";
import { CarsListResponse } from "../Response/CarsListResponse";
import { CarsResponse } from "../Response/CarsResponse";
export class PostCreateCarTransformer {
    constructor(){}


    public async fromScreen(reqScreen: any, header?: any): Promise<any> {

        if (
            !reqScreen.marca ||
            !reqScreen.modelo ||
            !reqScreen.ano ||
            !reqScreen.motor ||
            !reqScreen.precoPorDia ||
            !reqScreen.precoPorMes ||
            !reqScreen.file ||
            !reqScreen.categoria
        ) {
            throw new Error('Todos os campos devem ser preenchidos.');
        }

    return {
     make: reqScreen.marca,
     model: reqScreen.modelo,
     year: reqScreen.ano,
     motor: reqScreen.motor,
     pricePerDay: reqScreen.precoPorDia,
     pricePerMonth: reqScreen.precoPorMes,
     rented: false,
     category: reqScreen.categoria,
     file: reqScreen.file,
     }
    }


    public async toScreen(dto: CardListDto[]): Promise<CarsListResponse>{
      throw new Error('metodo nao implantado, ou seja nao tem response')
    }
    
}