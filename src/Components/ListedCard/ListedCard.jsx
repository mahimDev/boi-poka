
const ListedCard = ({ data }) => {
    const
        {
            bookId,
            bookName, author, image, tags,
            review, rating, totalPages,
            category, publisher, yearOfPublishing
        }
            = data
    return (
        // <div>
        //     <div>
        //         <img src={image} alt="" />
        //     </div>
        //     <div>
        //         <h1>{bookName}</h1>
        //         <p>By : {author}</p>
        //         <div>
        //             <p><strong>Tag</strong> #{tags}</p>
        //             <p><img src="" alt="" /><span>{yearOfPublishing}</span></p>
        //         </div>
        //         <div>
        //             <p><img src="" alt="" /><span>{publisher}</span> </p>
        //             <p><img src="" alt="" /><span>{totalPages}</span> </p>
        //         </div>
        //         <hr />
        //         <div>
        //             <button>Category : {category}</button>
        //             <button>Rating : {rating}</button>
        //             <button>View Details </button>
        //         </div>
        //     </div>
        // </div>
        // 
        // 
        <div className="mt-20 w-[80vw] h-[40vh] mx-auto bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row transition-shadow duration-300 hover:shadow-xl">
            {/* Book Image Section */}
            <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-gray-200">
                <img src={image} alt="Book Cover" className="object-cover h-full w-auto max-w-full p-2" />
            </div>

            {/* Book Information Section */}
            <div className="flex flex-col justify-between p-4 lg:p-6 lg:w-1/2 h-full text-white">
                <div>
                    <h1 className="text-lg font-bold truncate">{bookName}</h1>
                    <p className="mt-1 text-sm">By: <span className="font-medium">{author}</span></p>

                    <div className="mt-2 text-sm">
                        <p><strong>Tag</strong>: #{tags}</p>
                        <p className="flex items-center">
                            <img src="calendar-icon.png" alt="Calendar Icon" className="inline-block w-4 h-4 mr-2" />
                            <span>{yearOfPublishing}</span>
                        </p>
                        <p className="flex items-center">
                            <img src="publisher-icon.png" alt="Publisher Icon" className="inline-block w-4 h-4 mr-2" />
                            <span>{publisher}</span>
                        </p>
                        <p className="flex items-center">
                            <img src="pages-icon.png" alt="Pages Icon" className="inline-block w-4 h-4 mr-2" />
                            <span>{totalPages} pages</span>
                        </p>
                    </div>
                </div>

                <hr className="my-4 border-gray-300 opacity-50" />

                {/* Buttons Section */}
                <div className="flex flex-wrap gap-2 mt-2">
                    <button className="flex-1 px-3 py-1 text-sm bg-indigo-600 rounded-lg hover:bg-indigo-500">
                        Category: {category}
                    </button>
                    <button className="flex-1 px-3 py-1 text-sm bg-yellow-500 rounded-lg hover:bg-yellow-400">
                        Rating: {rating}
                    </button>
                    <button className="flex-1 px-3 py-1 text-sm bg-blue-600 rounded-lg hover:bg-blue-500">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListedCard;