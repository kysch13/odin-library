const myLibrary = [];
const library = document.getElementById('library');
const addBookBtn = document.getElementById('add-book-submit');
let bookID = 0;

addBookBtn.addEventListener('click', () => {
    addBookFormSubmit();
});

library.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.innerText === 'X') {
        deleteBook(e.target.dataset.id);
    }
    if (e.target.classList == 'card-read-toggle') {
        toggleReadStatus(e.target.dataset.id);
    }
});

function deleteBook(id) {
    for (let i=0; i<myLibrary.length; i++) {
        if (myLibrary[i].id == id) {
            myLibrary.splice(i, 1);
            break;
        }
    }
    outputBooks();
}

function toggleReadStatus(id) {
    for (let i=0; i<myLibrary.length; i++) {
        if (myLibrary[i].id == id) {
            myLibrary[i].readstatus = !myLibrary[i].readstatus;
            break;
        }
    }
}


function addBookFormSubmit() {
    let form = document.getElementById('add-book-form');
    let inputs = form.querySelectorAll('input');
    let formObj = {};
    inputs.forEach(input => {
        let key = input.id;
        if (input.type == 'checkbox') {
            formObj[key] = input.checked;
        } else {
            formObj[key] = input.value;
        }
        
    });

    addBookToLibrary(formObj.title, formObj.author, formObj.publishdate, formObj.pagecount, formObj.readstatus);
    outputBooks();
}

function Book(title, author, publishDate, pagecount, readstatus, id) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.pagecount = pagecount;
    this.readstatus = readstatus;
    this.id = id;
    this.style = `linear-gradient(90deg, #ffffff, #ffffff), linear-gradient(45deg, rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5), rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.75)`;
}

function addBookToLibrary(title, author, publishDate, pagecount, readstatus) {
    let book = new Book(title, author, publishDate, pagecount, readstatus, bookID);
    bookID++;
    myLibrary.push(book);
}

function outputBooks() {
    library.innerHTML = '';
 
    myLibrary.forEach(book => {
        library.appendChild(bookCard(book));
    });

}

function bookCard(book) {
    let card = document.createElement('div');
    card.classList.add('book-card');
    card.dataset.id = book.id;
    let title = document.createElement('h2');
    let author = document.createElement('h3');
    let date = document.createElement('span');
    let pagecount = document.createElement('span');

    // Read staus toggle switch
    let readstatus = document.createElement('label');
    readstatus.classList.add('readstatus-toggle');
    let readToggle = document.createElement('input');
    let readSlider = document.createElement('span');
    readToggle.type = 'checkbox';
    readToggle.dataset.id = book.id;
    readToggle.classList.add('card-read-toggle');
    readToggle.checked = book.readstatus;
    readstatus.appendChild(readToggle);
    readstatus.appendChild(readSlider);


    let closeBtn = document.createElement('button');
    closeBtn.dataset.id = book.id;
    closeBtn.textContent = 'X';

    title.textContent = book.title;
    author.textContent = book.author;
    date.textContent = book.publishDate;
    pagecount.textContent = book.pagecount;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(date);
    card.appendChild(pagecount);
    card.appendChild(readstatus);
    card.appendChild(closeBtn);

    card.style.background = book.style;

    return card;
}

