import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IArticle } from './interfaces/article.interface';

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private ArticleModel: Model<IArticle>) {}

  public async getAllArticles(criteria): Promise<IArticle[]> {
    const articles = this.ArticleModel.find({
      total_revs: { $gte: criteria },
    });
    return articles;
  }
}
