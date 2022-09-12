import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './modules/article/article.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ArticleModule,
    MongooseModule.forRoot(`${process.env.MONGO_DB}`),
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
