import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Res,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { Response } from 'express';
import { IArticle } from './interfaces/article.interface';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/all')
  async getAllArticles(
    @Body('criteria', ParseIntPipe) criteria: number,
    @Res() res: Response,
  ): Promise<IArticle[] | any> {
    try {
      const articles = await this.articleService.getAllArticles(criteria);

      if (articles.length === 0) {
        throw new HttpException(
          'Not found any AggDaily',
          HttpStatus.BAD_REQUEST,
        );
      }
      res.send({ data: articles });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
