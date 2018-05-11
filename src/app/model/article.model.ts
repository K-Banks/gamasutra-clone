export class Article {
  title: string;
  author: string;
  date: string;
  image: string;
  paragraphs: string;

  constructor(title: string, author: string, date: string, image: string, paragraphs: string) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.image = image;
    this.paragraphs = paragraphs;
  }
}
