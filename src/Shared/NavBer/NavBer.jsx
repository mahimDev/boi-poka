import { NavLink } from "react-router-dom";

const NavBer = () => {
    return (

        <div className="top-0 sticky z-10 bg-soft-gradient backdrop-blur-xl">
            <div className="flex justify-between w-11/12 mx-auto items-center py-5 px-10 ">
                <img className=" h-14" src="https://img.icons8.com/?size=100&id=ChugQlss1ohB&format=png&color=000000" alt="" />
                <div className="flex items-center gap-4">
                    <ul className="flex gap-4 text-lg font-semibold">
                        <NavLink to='/'> <li>Home</li></NavLink>
                        <NavLink to='listedBooks'><li>Listed Books</li></NavLink>
                        <NavLink to='/'><li>About</li></NavLink>
                        <NavLink to='/'><li>Contact</li></NavLink>



                    </ul>
                    <button className="border-2 border-[#2a7715]  py-1 px-3 font-semibold rounded-md">  💸 10</button>
                </div>
            </div>
        </div>

    );
};

export default NavBer;