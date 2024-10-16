const myLibrary = [];
const addBookBtn = document.getElementById('add-book-submit');

addBookBtn.addEventListener('click', () => {
    addBookFormSubmit();
});

function addBookFormSubmit() {
    let form = document.getElementById('add-book-form');
    let inputs = form.querySelectorAll('input');
    let formObj = {};
    inputs.forEach(input => {
        let key = input.id;
        formObj[key] = input.value;
    });

    addBookToLibrary(formObj.title, formObj.author, formObj.publishdate, formObj.pagecount, formObj.readstatus);
    outputBooks();
}

function Book(title, author, publishDate, pagecount, readstatus) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.pagecount = pagecount;
    this.readstatus = readstatus;
}

function addBookToLibrary(title, author, publishDate, pagecount, readstatus) {
    let book = new Book(title, author, publishDate, pagecount, readstatus);
    myLibrary.push(book);
}

function outputBooks() {
    let library = document.getElementById('library');
    library.innerHTML = '';
    myLibrary.forEach(book => {
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
    
    card.style.background = `linear-gradient(90deg, #ffffff, #ffffff), linear-gradient(45deg, rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5), rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.75)`;

    return card;
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '1937');
addBookToLibrary('Watership Down', 'Richard Adams', '1972');
addBookToLibrary('Dune', 'Frank Herbert', '1965');
outputBooks();