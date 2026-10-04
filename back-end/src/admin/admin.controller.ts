import { Controller, Get } from '@nestjs/common';
import { adminService } from './admin.service';

@Controller('admin')
export class adminController {
    constructor(private admin: adminService) {}
    @Get('/volunters_orders')
    async allOrders(){
       return this.admin.showVoluntersOrders()
    }
}
