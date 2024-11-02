const getLocalStoreReadBooks = () => {
  const storedBooks = localStorage.getItem("read-list");

  if (storedBooks) {
    const storedBook = JSON.parse(storedBooks);
    return storedBook;
  } else {
    return [];
  }
};

const setLocalStoreReadBooks = (id) => {
  const books = getLocalStoreReadBooks();

  if (books.includes(id)) {
    // already book stored
    console.log(id, " already book stored in read list");
  } else {
    books.push(id);
    const bookId = JSON.stringify(books);
    localStorage.setItem("read-list", bookId);
  }
};
// wish list
const getLocalStoreWishBooks = () => {
  const storedBooks = localStorage.getItem("wish-list");

  if (storedBooks) {
    const storedBook = JSON.parse(storedBooks);
    return storedBook;
  } else {
    return [];
  }
};

const setLocalStoreWishBooks = (id) => {
  const books = getLocalStoreWishBooks();

  if (books.includes(id)) {
    // already book stored
  } else {
    books.push(id);
    const bookId = JSON.stringify(books);
    localStorage.setItem("wish-list", bookId);
  }
};

export {
  setLocalStoreReadBooks,
  setLocalStoreWishBooks,
  getLocalStoreReadBooks,
};
