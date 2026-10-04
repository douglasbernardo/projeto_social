import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Admin } from "src/schema/admin.schema";
import { VolunterService } from "src/volunter/volunter.service";

@Injectable()
export class adminService {
    constructor(@InjectModel(Admin.name)
     private adminModel: Model<Admin>,
     private volunter: VolunterService
    ){}
    async showVoluntersOrders(){
        return this.volunter.getAll()
    }
}