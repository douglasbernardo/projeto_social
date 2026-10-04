import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunterController } from './volunter.controller';
import { VolunterService } from './volunter.service';
import { Volunter, volunterSchema } from 'src/schema/volunter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Volunter.name, schema: volunterSchema}]),
  ],
  controllers: [VolunterController],
  providers: [VolunterService],
  exports: [VolunterService],
})
export class VolunterModule {}