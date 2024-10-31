import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(books => setBooks(books))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;