import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, rating, totalPages, category, publisher, yearOfPublishing } = book
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="flex justify-center p-4 mt-5">
                    <div className="max-w-md  w-full bg-white border border-gray-200 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 will-change-transform">
                        <img
                            src={image}
                            alt="Card Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 antialiased">
                            <h2 className="text-xl font-semibold mb-2">{bookName}</h2>
                            <p className="text-gray-600 mb-4">
                                {author}
                            </p>
                            <hr className="h-1 bg-gradient-to-r from-green-500 to-gray-700 border-0 my-4" />
                            <div className="flex justify-between">
                                <p>{category}</p>
                                <p>{rating} ⭐</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;