import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { adminService } from './admin.service';
import { Admin, adminSchema } from 'src/schema/admin.schema';
import { adminController } from './admin.controller';
import { VolunterModule } from 'src/volunter/volunter.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Admin.name, schema: adminSchema}]),
    VolunterModule
  ],
  controllers: [adminController],
  providers: [adminService],
  exports: [adminService],
})
export class adminModule {}