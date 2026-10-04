import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { VolunterModule } from './volunter/volunter.module';
import { MongooseModule } from '@nestjs/mongoose';
import { adminModule } from './admin/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://douglas_mongo:vbKpNxsUKv7lgwk9@cluster0.gmrnavg.mongodb.net/?appName=Cluster0"),
    VolunterModule,
    adminModule
  ],
  controllers: [AppController],
})
export class AppModule {}
