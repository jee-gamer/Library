const bookListDiv = document.querySelector('#bookList')
const showButton = document.querySelector('#add')
const closeButton = document.querySelector('dialog button')
const submitButton = document.querySelector('#submitForm')
const dialog = document.querySelector('dialog')
const form = document.querySelector('form')

class Book{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read ? 'read': 'not read yet'
    }

    info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

class Library{
    constructor() {
        this.MyLibrary = [];
    }

    AddBookToLibrary(book){
        this.MyLibrary.push(book)
    }

    displayBook(){
        bookListDiv.replaceChildren();
        for (let book of this.MyLibrary){
            let bookDiv = document.createElement('div');
            bookDiv.textContent = `${book.title} read: ${book.read}`
            bookDiv.style.width = '200px'
            bookDiv.style.textAlign = 'left'
            bookListDiv.appendChild(bookDiv)

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'delete'
            deleteButton.addEventListener('click', () => this.removeBook(book.title))
            bookListDiv.appendChild(deleteButton)

            let readButton = document.createElement('button');
            readButton.textContent = 'readToggle'
            readButton.addEventListener('click', () => this.readToggle(book))
            bookListDiv.appendChild(readButton)
        }
    }

    readToggle(book){
        if (book.read === 'not read yet') {
            book.read = 'read';
        } else {
            book.read = 'not read yet';
        }
        this.displayBook()
    }

    inputToAddBook(event){
        event.preventDefault()
        const formData = new FormData(form)
        let title = formData.get('title')
        let author = formData.get('author')
        let pages = parseInt(formData.get('pages'))
        let read = false // default
        let book = new Book(title, author, pages, read)
        this.AddBookToLibrary(book)
        dialog.close()
        this.displayBook()
    }

    removeBook(title){
        this.MyLibrary = this.MyLibrary.filter(book => book.title !== title);
        this.displayBook();
    }


}

let Lib1 = new Library();
const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true)
const book2 = new Book('1984', 'George Orwell', 328, false)
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true)
const book4 = new Book('The Catcher in the Rye', 'J.D. Salinger', 277, false)

// Add books to the library
Lib1.AddBookToLibrary(book1)
Lib1.AddBookToLibrary(book2)
Lib1.AddBookToLibrary(book3)
Lib1.AddBookToLibrary(book4)

Lib1.displayBook()

showButton.addEventListener('click', () => dialog.showModal())
closeButton.addEventListener('click', () => dialog.close())
submitButton.addEventListener('click', (e) => Lib1.inputToAddBook(e))