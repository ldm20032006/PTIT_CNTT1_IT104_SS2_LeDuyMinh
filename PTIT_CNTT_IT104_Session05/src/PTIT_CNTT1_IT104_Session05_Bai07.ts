export {};

class Book {
  private id: number;
  private title: string;
  private author: string;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  setAuthor(newAuthor: string): void {
    this.author = newAuthor;
  }
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  viewBooks(): void {
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach((book) => {
      console.log(`ID: ${book.getId()} | Title: ${book.getTitle()} | Author: ${book.getAuthor()}`);
    });
  }

  editBookById(id: number, newTitle: string, newAuthor: string): void {
    const book = this.books.find((b) => b.getId() === id);
    if (book) {
      book.setTitle(newTitle);
      book.setAuthor(newAuthor);
    } else {
      console.log(`Không tìm thấy sách với ID: ${id}`);
    }
  }
}

const book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book(2, "Lão Hạc", "Nam Cao");
const book3 = new Book(3, "Tắt Đèn", "Ngô Tất Tố");
const book4 = new Book(4, "Tuổi Thơ Dữ Dội", "Phùng Quán");
const book5 = new Book(5, "Truyện Kiều", "Nguyễn Du");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

console.log("Trước khi sửa:");
library.viewBooks();

library.editBookById(3, "Tắt Đèn (Bản Mới)", "Ngô Tất Tố");

console.log("\nSau khi sửa:");
library.viewBooks();