import { Item } from './item';
import { Iterator } from './pagesIterable';
import { Pages } from './pages';

export class Book extends Iterator(Item) {
  pages: Pages;
  title: string;
  author: string;

  constructor(title: string, author: string, pages: Pages) {
    super();
    this.pages = pages;
    this.title = title;
    this.author = author;
  }

  setTitle(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  toString(): string {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}, `;
  }
}
