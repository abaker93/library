let library = [
	{
		title: 'test1',
		author: 'test',
		pages: 123,
		read: true
	},
	{
		title: 'test2',
		author: 'test',
		pages: 123,
		read: true
	},
	{
		title: 'test3',
		author: 'test',
		pages: 123,
		read: true
	},
	{
		title: 'test4',
		author: 'test',
		pages: 123,
		read: true
	},
	{
		title: 'test5',
		author: 'test',
		pages: 123,
		read: true
	}
];
const libraryList = document.getElementById('library-list');
const formModal = document.getElementById('form-modal');

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	let a = document.getElementById('form-title').value;
	let b = document.getElementById('form-author').value;
	let c = document.getElementById('form-pages').value;
	let d = document.getElementById('form-read').checked;

	if (a !== '' && b !== '' && c !== '' ) {
		library.push(new Book(a, b, c, d));
		displayBooks();
		clearForm();
	} else {
		alert('Form not filled out')
	}
}

function displayBooks() {
	libraryList.innerHTML = '';
	
	for(let i=0; i<library.length; i++) {
		const libraryItem = document.createElement('div');
		libraryItem.classList.add('library-row');
		libraryItem.innerHTML = 
			`<div>${library[i].title}</div>
			<div>${library[i].author}</div>
			<div>${library[i].pages}</div>
			<div>${library[i].read}</div>
			<button class="remove-btn" onclick="removeBook(${i})"><svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></button>`;
		libraryList.append(libraryItem);
	}
}



displayBooks();

function clearForm() {
	document.getElementById('form-title').value = '';
	document.getElementById('form-author').value = '';
	document.getElementById('form-pages').value = '';
	document.getElementById('form-read').checked = false;
}

function removeBook(i) {
	library.splice(i, 1);
	displayBooks();
}

function showModal() {
	formModal.classList.remove('hide');
	formModal.classList.add('show');
}

function hideModal() {
	formModal.classList.remove('show');
	formModal.classList.add('hide');
}