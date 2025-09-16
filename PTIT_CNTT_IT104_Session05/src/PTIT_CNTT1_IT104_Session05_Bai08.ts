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

  searchBooksByTitle(keyword: string): void {
    const results = this.books.filter(book =>
      book.getTitle().toLowerCase().includes(keyword.toLowerCase())
    );
    if (results.length > 0) {
      console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
      results.forEach(book => {
        console.log(`ID: ${book.getId()} | Title: ${book.getTitle()} | Author: ${book.getAuthor()}`);
      });
    } else {
      console.log(`Không tìm thấy sách nào với từ khóa "${keyword}".`);
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

library.searchBooksByTitle("đèn");