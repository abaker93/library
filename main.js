let library = [
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		pages: 295,
		read: false
	},
	{
		title: 'Lord of the Rings',
		author: 'Tolkien',
		pages: 100,
		read: true
	}
];
const libraryList = document.getElementById('library');

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.readText = function() {
	if(this.read) {
		return 'read';
	} else {
		return 'not read';
	}
}

function addBookToLibrary() {
	
}

function displayBooks() {
	for(let i=0; i<library.length; i++) {
		const libraryItem = document.createElement('div');
		libraryItem.classList.add('library-row');
		libraryItem.setAttribute('data-index', i);
		libraryItem.innerHTML = 
			`<div>${library[i].title}</div>
			<div>${library[i].author}</div>
			<div>${library[i].pages}</div>
			<div>${library[i].read}</div>
			<button>X</button>`;
		libraryList.append(libraryItem);
	}
}

displayBooks();