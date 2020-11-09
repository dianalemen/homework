import { Item } from './item';
import { Iterator } from './pagesIterable';
import { Pages } from './pages';

export class Magazine extends Iterator(Item) {
  pages: Pages;
  title: string;

  constructor(title: string, pages: Pages) {
    super();
    this.title = title;
    this.pages = pages;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

  toString(): string {
    return `Magazine: ${this.title} with number of pages: ${this.pages.length}, `;
  }
}
