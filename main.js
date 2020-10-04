function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    let readText = '';
    
    if(this.read === true) {
        readText = 'already read'
    } else {
        readText = 'not read yet'
    }

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readText}`
    }
}

const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info());