let library = [];
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
		libraryItem.setAttribute('data-index', i);
		libraryItem.innerHTML = 
			`<div>${library[i].title}</div>
			<div>${library[i].author}</div>
			<div>${library[i].pages}</div>
			<div>${library[i].read}</div>
			<button class="remove-btn" onclick="removeBook()">X</button>`;
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

// function removeBook() {
// 	const removeBtns = document.querySelectorAll('.remove-btn');
// 	const libraryRows = document.querySelectorAll('.library-row');
// 	console.log(removeBtns);
// 	console.log(libraryRows.length);

// 	removeBtns.forEach(btn => {
// 		btn.addEventListener('click', e => {
// 			let bookID = e.target.parentElement.getAttribute('data-index');
// 			console.log(bookID);
// 			for (let i=0; i<libraryRows.length; i++) {
// 				console.log(libraryRows.dataset);
// 			}
// 		})
// 	})
// }

function showModal() {
	formModal.classList.remove('hide');
	formModal.classList.add('show');
}