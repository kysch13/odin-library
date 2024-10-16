const myLibrary = [];

function Book(title, author, publishDate) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
}

function addBookToLibrary(title, author, publishDate) {
    let book = new Book(title, author, publishDate);
    myLibrary.push(book);
}

function outputBooks() {
    myLibrary.forEach(book => {
        let library = document.getElementById('library');
        library.appendChild(bookCard(book));
    });
}

function bookCard(book) {
    card = document.createElement('div');
    card.classList.add('book-card');
    title = document.createElement('h2');
    author = document.createElement('h3');
    date = document.createElement('span');

    title.textContent = book.title;
    author.textContent = book.author;
    date.textContent = book.publishDate;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(date);
    
    card.style.background = `linear-gradient(90deg, #ffffff, #ffffff), linear-gradient(189deg, rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5), rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.75)`;

    return card;
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '1937');
addBookToLibrary('Watership Down', 'Richard Adams', '1972');
addBookToLibrary('Dune', 'Frank Herber', '1965');
outputBooks();