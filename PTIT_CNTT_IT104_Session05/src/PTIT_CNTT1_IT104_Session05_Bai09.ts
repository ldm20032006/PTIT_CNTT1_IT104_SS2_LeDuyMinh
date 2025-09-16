export {};
class Book {
  private id: number;
  private title: string;
  private author: string;
  private year: number;

  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(author: string): void {
    this.author = author;
  }

  getYear(): number {
    return this.year;
  }

  setYear(year: number): void {
    this.year = year;
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
      console.log(
        `ID: ${book.getId()} | Title: ${book.getTitle()} | Author: ${book.getAuthor()} | Year: ${book.getYear()}`
      );
    });
  }

  deleteBookById(id: number): void {
    this.books = this.books.filter((book) => book.getId() !== id);
    console.log(`Đã xóa sách có ID: ${id}`);
  }

  updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
    const book = this.books.find((b) => b.getId() === id);
    if (book) {
      book.setTitle(newTitle);
      book.setAuthor(newAuthor);
      book.setYear(newYear);
      console.log(`Đã cập nhật sách có ID: ${id}`);
    } else {
      console.log(`Không tìm thấy sách có ID: ${id}`);
    }
  }
}

const library = new Library();

library.addBook(new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941));
library.addBook(new Book(2, "Lão Hạc", "Nam Cao", 1943));
library.addBook(new Book(3, "Tắt Đèn", "Ngô Tất Tố", 1939));
library.addBook(new Book(4, "Tuổi Thơ Dữ Dội", "Phùng Quán", 1988));
library.addBook(new Book(5, "Truyện Kiều", "Nguyễn Du", 1820));

library.viewBooks();

library.updateBookById(3, "Tắt Đèn (Bản mới)", "Ngô Tất Tố", 2024);
library.deleteBookById(2);

library.viewBooks();