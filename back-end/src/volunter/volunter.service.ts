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
            phone: data.phone,
            neighboorhood: data.neighboorhood,
            areahelped: data.helpareas,
            knowWhere: data.knownWhere
        })
        // validação básica do formulario de voluntarios
        if(!data.name || !data.birthDate || !data.phone || !data.neighboorhood || !data.helpareas.length || !data.knownWhere){
            throw new BadRequestException(
                'Todos os dados devem ser preenchidos'
            );
        }
        return addingNewVolunter.save()
    }
    async getAll(){
        return this.volunterModel.find()
    }
}