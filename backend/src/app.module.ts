import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './content.entity';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    DatabaseModule,
    TypeOrmModule.forFeature([Content]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
