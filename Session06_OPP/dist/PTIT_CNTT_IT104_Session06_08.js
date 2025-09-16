"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.books = [];
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện");
        this.books.forEach((book) => console.log(`ID: ${book.id}
          Title: ${book.title}
          Author: ${book.author}
          Stock: ${book.stock}
          Status: ${book.status} 
          ---------------------`));
    }
}
const lib = new Library();
const b1 = new Book(1, "Chí Phèo", "Nam Cao", 5, "available");
const b2 = new Book(2, "Số đỏ", "Võ Trọng Phụng", 3, "available");
const b3 = new Book(3, "Nhật ký trong tù", "Hồ Chí Minh", 2, "available");
lib.addBook(b1);
lib.addBook(b2);
lib.addBook(b3);
lib.showBooks();
