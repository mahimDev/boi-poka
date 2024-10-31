import Books from "../../Components/Books/Books";
import Banner from "../../Shared/Banner/Banner";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;