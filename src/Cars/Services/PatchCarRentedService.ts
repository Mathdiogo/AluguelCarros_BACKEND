import { CarRentedDto } from "../Dto/CarRentedDto";
import { useDb } from "../../config/database";
import { ObjectId } from "mongodb";
import * as nodemailer from 'nodemailer';

export class PatchCarRentedService {
    constructor(){}

    public async invoke(dto: CarRentedDto): Promise<void> {
        const db = useDb();

        console.log(dto)

        const objectId = new ObjectId(dto.id);

        const car = await db.collection('cars').findOne({ _id: objectId });

        if (!car) {
            return;
        }

        if(car.rented === true) {
            throw new Error("O carro ja esta alugado");
            
        }

        await db.collection('cars').updateOne(
            { _id: objectId },
            { $set: { rented: true } }
        );

        // Enviar email
        const transporter = nodemailer.createTransport({
            service: "Hotmail",            
            auth: {
                user: 'matheusponte2010@hotmail.com',
                pass: 'pontepretabrasil'
            }
        });

        const mailOptions = {
            from: 'matheusponte2010@hotmail.com',
            to: dto.email,
            subject: 'Carro alugado com sucesso!',
            text: `Seu carro ${dto.id} foi alugado com sucesso. Aproveite!`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });
    }
}
