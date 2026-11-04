import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { addVolunterDto } from "src/dto/volunter/add_volunter.dto";
import { Volunter } from "src/schema/volunter.schema";

@Injectable()
export class VolunterService{
    constructor(@InjectModel(Volunter.name) private volunterModel: Model<Volunter>){}

    async addVolunter(data: addVolunterDto){
        const addingNewVolunter = new this.volunterModel({
            name: data.name,
            birthDate: data.birthDate,
            email: data.email,
            phone: data.phone,
            city: data.city,
            areasIWillHelp: data.areasIWillHelp,
            howDidYouKnowUs: data.howDidYouKnowUs
        })
        // validação básica do formulario de voluntarios
        if(!data.name || !data.birthDate || !data.phone || !data.city || !data.areasIWillHelp.length || !data.howDidYouKnowUs){
            throw new BadRequestException(
                'Todos os dados devem ser preenchidos'
            );
        }

        if(this.validateEmail(data.email) === false) throw new BadRequestException('E-mail inválido');

        try{
            if(!this.validateEmail(data.email)) throw new BadRequestException('E-mail inválido') 
            const users = await this.getAll()
            const emailExists = users.some((user) => data.email == user.email)
            if(emailExists){
                throw new BadRequestException('Já existe voluntário com esse e-mail')
            }

            console.log(addingNewVolunter)
            return addingNewVolunter.save()
        }catch(e){
            if (e instanceof BadRequestException) {
                throw e
            }
        }
    }
    async getAll(){
        return this.volunterModel.find()
    }
    validateEmail(email: string){
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
    }
}