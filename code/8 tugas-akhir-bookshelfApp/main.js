const bookList = [];
const STORAGE_KEY = 'PERSONAL_BOOKLIST';

function addBook() {
    const title = document.getElementById('bookFormTitle').value;
    const author = document.getElementById('bookFormAuthor').value;
    const year = parseInt(document.getElementById('bookFormYear').value);
    const isComplete = document.getElementById('bookFormIsComplete').checked;
   
    const bookId = generateId();
    const bookItem = createBookItem(bookId, title, author, year, isComplete);
    bookList.push(bookItem);
   
    renderBooks(bookList);
    saveToStorage();
}

function switchBookshelf(bookId) {
    const book = findBookById(bookId);
    if (!book) return;

    book.isComplete = !book.isComplete;
    renderBooks(bookList);
    saveToStorage();
}

function removeBook(bookId) {
    const bookIndex = findBookIndexById(bookId);
    if (bookIndex === -1) return;

    bookList.splice(bookIndex, 1);
    renderBooks(bookList);
    saveToStorage();
}

function editBook(bookId) {
    const book = findBookById(bookId);
    if (!book) return;

    const newTitle = prompt("Masukkan judul baru:", book.title);
    const newAuthor = prompt("Masukkan penulis baru:", book.author);
    const newYear = prompt("Masukkan tahun baru:", book.year);
    const newIsComplete = confirm("Apakah buku ini sudah selesai dibaca?\n(OK untuk selesai, Cancel untuk belum)");

    if (newTitle !== null) book.title = newTitle;
    if (newAuthor !== null) book.author = newAuthor;
    if (newYear !== null && !isNaN(newYear)) book.year = parseInt(newYear);
    book.isComplete = newIsComplete;

    renderBooks(bookList);
    saveToStorage();
}

function saveToStorage() {
    if (isStorageAvailable()) {
        const stringified = JSON.stringify(bookList);
        localStorage.setItem(STORAGE_KEY, stringified);
    }
}

function isStorageAvailable() {
    return typeof(Storage) !== 'undefined';
}

function loadDataFromStorage() {
    const storedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(storedData);
   
    if (parsedData) {
        for (const book of parsedData) {
            bookList.push(book);
        }
    }
   
    renderBooks(bookList);
}

function generateId() {
    return Date.now();
}

function createBookItem(id, title, author, year, isComplete) {
    return { id, title, author, year, isComplete };
}

function createBookElement(book) {
    const titleElement = document.createElement('h3');
    titleElement.setAttribute('data-testid', 'bookItemTitle');
    titleElement.innerText = book.title;

    const authorElement = document.createElement('p');
    authorElement.setAttribute('data-testid', 'bookItemAuthor');
    authorElement.innerText = `Penulis: ${book.author}`;

    const yearElement = document.createElement('p');
    yearElement.setAttribute('data-testid', 'bookItemYear');
    yearElement.innerText = `Tahun: ${book.year}`;

    const container = document.createElement('div');
    container.setAttribute('data-bookid', book.id);
    container.setAttribute('data-testid', 'bookItem');

    const switchButton = document.createElement('button');
    switchButton.setAttribute('data-testid', 'bookItemIsCompleteButton');
    switchButton.addEventListener('click', () => switchBookshelf(book.id));

    switchButton.innerText = book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
    deleteButton.innerText = 'Hapus buku';
    deleteButton.addEventListener('click', () => removeBook(book.id));

    const editButton = document.createElement('button');
    editButton.setAttribute('data-testid', 'bookItemEditButton');
    editButton.innerText = 'Edit buku';
    editButton.addEventListener('click', () => editBook(book.id));

    const buttonContainer = document.createElement('div');
    buttonContainer.append(switchButton, deleteButton, editButton);
    container.append(titleElement, authorElement, yearElement, buttonContainer);

    return [container, book.isComplete];
}

function findBookById(bookId) {
    return bookList.find(book => book.id === bookId);
}

function findBookIndexById(bookId) {
    return bookList.findIndex(book => book.id === bookId);
}

function searchBook(event) {
    event.preventDefault();
    
    const searchTitle = document.getElementById('searchBookTitle').value.toLowerCase();
    const filteredBooks = bookList.filter(book => 
        book.title.toLowerCase().includes(searchTitle)
    );
    
    renderBooks(filteredBooks);
}

function renderBooks(books) {
    const completeBookList = document.getElementById('completeBookList');
    const incompleteBookList = document.getElementById('incompleteBookList');
    completeBookList.innerHTML = '';
    incompleteBookList.innerHTML = '';

    for (const book of books) {
        const bookElement = createBookElement(book);

        if (bookElement[1]) {
            completeBookList.append(bookElement[0]);
        } else {
            incompleteBookList.append(bookElement[0]);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const bookFormSubmit = document.getElementById('bookForm');
    bookFormSubmit.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();
    });

    const searchBookSubmit = document.getElementById('searchBook');
    searchBookSubmit.addEventListener('submit', searchBook);

    if (isStorageAvailable()) {
        loadDataFromStorage();
    }
});