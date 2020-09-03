let book = [
  { title: "Moby Dick", page: "585" },
  { title: "The Hobbit", page: "310" },
  { title: "The Dark Tower", page: "300" },
  { title: "The Mist", page: "176" },
];

let state = {
  pageHeader: "The Library",
  book: book,
};

function renderBook() {
  bookStr = "";
  state.book.forEach(function (book, index) {
    bookStr += `<div>
    ${book.title} with a page count of ${book.page}.
    </div>`;
  });
  return bookStr;
}

function addBook() {
  let book = {};

  let title = prompt("Enter New Title");
  book.title = title;

  let page = prompt("Enter the page count");
  book.page = page;

  state.book.push(book);

  render();
}
function updateBook(bookUpdate) {
  let index = bookUpdate.dataset.index;
  let book = state.book[index];

  let title = prompt("Edit Title");
  book.title = title;

  let page = prompt("Edit Page Count");
  book.page = page;

  render();
}

function deleteBook() {}

function render() {
  htmlString = `<div>
                <h1>${state.pageHeader}</h1>
                <div onclick='addBook()'>Add a new book to inventory</div>
                ${renderBook()}
                </div>`;
  renderBook();
  document.getElementById("app").innerHTML = htmlString;
}

render();
