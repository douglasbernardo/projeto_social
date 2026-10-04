
import { Controller, Get, Post, Body } from '@nestjs/common';
import { VolunterService } from './volunter.service';
import { addVolunterDto } from 'src/dto/volunter/add_volunter.dto';

@Controller('volunter')
export class VolunterController {
    constructor(private volunter: VolunterService) {}

    @Post('/add-volunter')
    async addVolunter(@Body() newVolunterDto: addVolunterDto): Promise<void> {
        await this.volunter.addVolunter(newVolunterDto)
        //
    }
}
