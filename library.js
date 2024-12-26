const MyLibrary = []
const bookListDiv = document.querySelector('#bookList')

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'read': 'not read yet';
    this.info = function (){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function AddBookToLibrary(book){
    MyLibrary.push(book);
}

function displayBook(){
    for (let book of MyLibrary){
        let bookDiv = document.createElement('div');
        bookDiv.textContent = book.title;
        bookDiv.style.width = '200px';
        bookDiv.style.textAlign = 'left';
        bookListDiv.appendChild(bookDiv);
    }
}

const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);
const book2 = new Book('1984', 'George Orwell', 328, false);
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
const book4 = new Book('The Catcher in the Rye', 'J.D. Salinger', 277, false);

// Add books to the library
AddBookToLibrary(book1);
AddBookToLibrary(book2);
AddBookToLibrary(book3);
AddBookToLibrary(book4);

displayBook();