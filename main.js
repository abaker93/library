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
		read: false
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
		read: false
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
const readBtn = document.createElement('div');
const removeBtn = document.createElement('div');

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
		hideModal();
	} else {
		alert('Form not filled out')
	}
}

function displayBooks() {
	libraryList.innerHTML = '';
	
	for(let i=0; i<library.length; i++) {
		removeBtn.innerHTML = 
			`<button class="remove-btn" onclick="removeBook(${i})">
				<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
			</button>`;

		if (library[i].read) {
			readBtn.innerHTML = 
				`<button class="read-btn" onclick="toggleRead(${i})">
					<svg viewBox="0 0 151.8 167"><path d="M140.6 7.7h-2.5H29.4h-5.8c-1.1 0-2.1 0.6-2.8 1.5L10.3 24.8c-1 0.6-1.6 1.6-1.6 2.8v134.9c0 1.8 1.5 3.3 3.3 3.3h111.2c3.1 0 3.3-4.5 3.3-6.3v0.2l14.2 0c0.9 0 1.7-0.3 2.4-1 0.6-0.6 0.9-1.1 0.9-2.2V11C143.9 9.2 142.4 7.7 140.6 7.7 140.6 7.7 142.4 7.7 140.6 7.7zM134.8 151.8l-8.3 3V25.6c0-1.8-1.5-3.3-3.3-3.3H28.3c2.7-1.1 5.6-3 2.9-5.8l0-0.2h103.6V151.8z"/></svg>
					<span>Read</span>
				</button>`;
		} else {
			readBtn.innerHTML =
				`<button class="not-read-btn" onclick="toggleRead(${i})">
					<svg viewBox="0 0 0.73 0.68"><path class="fil0" d="M0.064 0l0 0.434 0.194 0c0.029,0 0.053,0.004 0.072,0.013 0.007,0.003 0.014,0.007 0.02,0.011l0 -0.417c-0.009,-0.014 -0.019,-0.024 -0.033,-0.031 -0.015,-0.007 -0.035,-0.01 -0.059,-0.01l-0.194 0zm0.194 0.464l-0.209 0c-0.008,0 -0.015,-0.006 -0.015,-0.015l0 -0.385 -0.034 0 0 0.435 0.229 0c0.052,0 0.079,0.007 0.102,0.052l0.067 0c0.023,-0.045 0.051,-0.052 0.102,-0.052l0.229 0 0 -0.435 -0.034 0 0 0.385c0,0.009 -0.007,0.015 -0.015,0.015l-0.209 0c-0.042,0 -0.074,0.006 -0.093,0.044 -0.005,0.012 -0.022,0.012 -0.027,-0.001 -0.017,-0.036 -0.053,-0.043 -0.093,-0.043zm0.122 -0.423l0 0.417c0.024,-0.019 0.056,-0.024 0.091,-0.024l0.194 0 0 -0.434 -0.194 0c-0.024,0 -0.044,0.003 -0.059,0.01 -0.014,0.007 -0.024,0.017 -0.032,0.031z"/></svg>
					<span>Not Read</span>
				</button>`
		}

		const libraryItem = document.createElement('div');
		libraryItem.classList.add('library-row');
		libraryItem.innerHTML = 
			`<div>${library[i].title}</div>
			<div>${library[i].author}</div>
			<div>${library[i].pages}</div>`;
		libraryItem.append(readBtn.cloneNode(true));
		libraryItem.append(removeBtn.cloneNode(true));
		libraryList.append(libraryItem);
	}
}

displayBooks();

function toggleRead(i) {
	if (library[i].read) {
		library[i].read = false;
	} else {
		library[i].read = true;
	}
	displayBooks();
}

function removeBook(i) {
	library.splice(i, 1);
	displayBooks();
}

function clearForm() {
	document.getElementById('form-title').value = '';
	document.getElementById('form-author').value = '';
	document.getElementById('form-pages').value = '';
	document.getElementById('form-read').checked = false;
}

function showModal() {
	formModal.classList.remove('hide');
	formModal.classList.add('show');
}

function hideModal() {
	formModal.classList.remove('show');
	formModal.classList.add('hide');
}