import { CardListDto } from "../Dto/CardListDto";
import { CarsDto } from "../Dto/CarsDto";
import { CarsListResponse } from "../Response/CarsListResponse";
import { CarsResponse } from "../Response/CarsResponse";
export class GetListTransformer {
    constructor(){}


    public async fromScreen(reqScreen: any, header?: any): Promise<any> {
               
    }


    public async toScreen(dto: CardListDto[]): Promise<CarsListResponse>{
        return {
            items: dto?.map((el: any)=> ({
                id: el._id, 
                marca: el.make, 
                modelo: el.model, 
                ano: el.year,
                motor: el.motor, 
                precoPorDia: el.pricePerDay,
                precoPorMes: el.pricePerMonth,
                alugado: el.rented,
                categoria: el.category,
                file: el.file
            }))
        };
    }
    
}