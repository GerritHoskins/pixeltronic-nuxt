export interface Article {
  attributes: ArticleAttributes;
}

export interface ArticleAttributes {
  _id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}
