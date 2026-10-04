import { IsString } from "class-validator";

export class addVolunterDto{
    @IsString()
    name: string;
    @IsString()
    birthDate: string;
    @IsString()
    phone: string;
    @IsString()
    neighboorhood: string;
    @IsString()
    helpareas: string[];
    @IsString()
    knownWhere: string;
}