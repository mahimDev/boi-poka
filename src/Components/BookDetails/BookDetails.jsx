import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const data = useLoaderData()
    const { bookId } = useParams()
    const id = parseInt(bookId)
    const
        {
            bookName, author, image, tags,
            review, rating, totalPages,
            category, publisher, yearOfPublishing
        }
            = data.find(book => book.bookId === id)

    console.log(image)
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex justify-around  mt-10">
                <div className="flex-1 flex justify-center bg-[#bfbfbf3b] py-20">
                    <img className="h-[50vh] drop-shadow-2xl rounded-sm" src={image} alt="" />
                </div>
                <div className="flex-1 py-10 px-40 ">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className="text-lg my-3">By : {author}</p>
                    <hr />
                    <p className="my-3 font-semibold">{category}</p>
                    <hr />
                    <p className="my-3 "><strong className="font-semibold ">Review : </strong>{review}</p>
                    <p className="flex "><strong className="font-semibold">Tag : </strong>
                        {
                            tags.map((tag, i) => <p key={i} className="ml-2 bg-green-100 px-2 rounded-sm ">#{tag}</p>)
                        }
                    </p>
                    <hr className="my-3" />
                    <p className="my-1">Number of page          : <strong className="font-semibold">{totalPages}</strong></p>
                    <p className="my-1">Publisher               : <strong className="font-semibold">{publisher}</strong></p>
                    <p className="my-1">Year Of Publishing      : <strong className="font-semibold">{yearOfPublishing}</strong></p>
                    <p className="my-1">Rating                  : <strong className="font-semibold">{rating}</strong></p>
                    <div className="mt-5">
                        <button className="border-2 border-green-700 py-2 px-8 rounded-sm font-bold text-green-700 mr-5">Read</button>
                        <button className="bg-green-700 border-2 border-green-700 py-2 px-8 rounded-sm font-bold text-white ">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;