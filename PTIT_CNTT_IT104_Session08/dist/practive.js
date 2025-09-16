"use strict";
// class Book{
//     id: number;
//     title: string;
//     author: string;
//     year: number;
//     constructor(
//         id: number,
//         title: string,
//         author: string,
//         year: number
//     ){
//         this.id = id;
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
// }
// class Library<T> {
//     private books: T[] = [];
//     addBook(book: T){
//         this.books.push(book);
//     }
//     getBookById(id: number): T | undefined{
//         return this.books.find((book: T) => (book as Book).id === id);
//     }
//     removeBook(id: number){
//         this.books.filter((book: T) => (book as Book).id !== id );
//     }
//     updateBook(id: number | string, newBook: T) {
//         const index = this.books.findIndex((book: T) => (book as Book).id === id);
//         if(index !== -1){
//             this.books[index]= {...newBook,id}; // Clone làm đối tượng cũ
//         }
//     }
//     listBooks(): T[]{
//         return this,this.books;
//     }
//     findBooksByTitleOrAuthor(searchTerm: string): T[]{
//         return this.books.filter((book: T) => (book as Book).title?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
//         (book as Book).author?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
//     }
//     getTotalBooks(): number{
//         return this.books.length;
//     }
//     findBooksByYear(year: number): T[]{
//         return this.books.filter((book: T) => (book as Book).year === year);
//     }
// }
// const library = new Library<Book>();
// const book1 = new Book(1, "Sách 1", "Nguyễn Văn A", 2020);
// const book2 = new Book(1, "Sách 1", "Nguyễn Văn A", 2020);
// const book3 = new Book(1, "Sách 1", "Nguyễn Văn A", 2020);
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);
// console.log("Danh sách các cuốn sách có trong thư viện: ", library.listBooks());
// console.log("Cuốn sách có id = 1", library.getBookById(1));
// const updateBookOto: Omit<Book, "id"> = {
//     title: "Sách 4",
//     author: "Lê Văn A",
//     year: 2000
// }
// // Cập nhật thông tin sách
// library.updateBook(2, updateBookOto);
// console.log("Cuốn sách có id = 2 sau khi cập nhật", library.getBookById(2));
// class BaseEntity[T]{}
// Library<Book>;
