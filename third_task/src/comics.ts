import { Item } from './item';
import { Iterator } from './pagesIterable';
import { Pages } from './pages';

export class Comics extends Iterator(Item) {
  pages: Pages;
  title: string;
  author: string;
  artist: string;

  constructor(title, author, artist, pages) {
    super();
    this.title = title;
    this.author = author;
    this.artist = artist;
    this.pages = pages;
  }

  setTitle(title) {
    this.title = title;
  }

  setAuthor(author) {
    this.author = author;
  }

  setArtist(artist) {
    this.artist = artist;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getArtist(): string {
    return this.artist;
  }

  toString(): string {
    return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}, `;
  }
}
