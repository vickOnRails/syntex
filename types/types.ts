export interface INote {
  url: string;
  title: string;
  articleId: string;
  quotes: IQuote[];
}

export interface IQuote {
  _id: string;
  title: string;
  url: string;
  quote: string;
  comments: string;
}
