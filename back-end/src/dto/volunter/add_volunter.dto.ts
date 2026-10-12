import { IsString } from "class-validator";

export class addVolunterDto{
    @IsString()
    name: string;
    @IsString()
    birthDate: string;
    @IsString()
    email: string;
    @IsString()
    phone: string;
    @IsString()
    city: string;
    @IsString()
    areasIWillHelp: string[];
    @IsString()
    howDidYouKnowUs: string;
}