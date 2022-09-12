import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  id: Number,
  ad_name: String,
  total_revs: Number,
  total_spend: Number,
  total_profit: Number,
  total_sessions: Number,
  total_paid_clicks: Number,
  total_page_views: Number,
  cpc: Number,
  roas: Number,
  image_url: String,
  status: String,
});
