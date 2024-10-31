
const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white py-10  mt-60 ">
                <div className="flex justify-center py-10">
                    <img src="https://img.icons8.com/?size=100&id=ChugQlss1ohB&format=png&color=000000" alt="" />
                </div>
                <div className="flex justify-evenly   ">
                    <div className="">
                        <h1 className="font-bold mb-3 ">About Us</h1>
                        <h2 className="text-white ">
                            We are a passionate team dedicated <br />
                            to providing the best services <br />
                            to our customers.</h2>
                    </div>
                    <div >
                        <h1 className="font-bold mb-3">Quick Links</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold mb-3">Subscribe</h1>
                        <h2 className="w-2/3">Subscribe to our newsletter for the latest updates.</h2>
                        <div className="mt-4 flex ">
                            <input
                                className="rounded-l py-[10px] pl-3 pr-8  "
                                placeholder="Enter your email address"
                                type="text" />
                            <input
                                className="rounded-r cursor-pointer py-2 px-5  font-semibold border text-lg text-white"
                                type="button"
                                value="Subscribe" />
                        </div>
                    </div>
                </div>
                <div className="border mt-10 w-11/12 mx-auto"></div>
                <h1 className="font-light text-center text-gray-200 mt-5">@2024 mahimDev All Rights Reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;