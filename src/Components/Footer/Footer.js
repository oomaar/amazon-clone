import Image from "next/image";

export const Footer = () => {
    return (
        <footer>
            <button className="w-full bg-gray-700 text-gray-300 py-3
                hover:bg-gray-600 transition duration-200 border rounded-xl">
                <a href="#">Back To Top</a>
            </button>
            {/* Top Footer */}
            <div className="border-b bg-amazon_blue-light">
                <div className="grid gap-4 text-gray-300 p-10
                    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                    lg:max-w-screen-xl lg:mx-auto"
                >
                    <div>
                        <h4 className="font-bold">Get to Know Us</h4>
                        <p className="link">Careers</p>
                        <p className="link">Blog</p>
                        <p className="link">About Amazon</p>
                        <p className="link">Investor Relations</p>
                        <p className="link">Amazon Devices</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Make Money with Us</h4>
                        <p className="link">Sell products on Amazon</p>
                        <p className="link">Sell on Amazon Business</p>
                        <p className="link">Sell apps on Amazon</p>
                        <p className="link">Become an Affiliate</p>
                        <p className="link">Advertise Your Products</p>
                        <p className="link">Self-Publish with Us</p>
                        <p className="link">Host an Amazon Hub</p>
                        <p className="link">›See More Make Money with Us</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Amazon Payment Products</h4>
                        <p className="link">Amazon Business Card</p>
                        <p className="link">Shop with Points</p>
                        <p className="link">Reload Your Balance</p>
                        <p className="link">Amazon Currency Con</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Let Us Help You</h4>
                        <p className="link">Amazon and COVID-19</p>
                        <p className="link">Your Account</p>
                        <p className="link">Your Orders</p>
                        <p className="link">Shipping Rates & Policies</p>
                        <p className="link">Returns & Replacements</p>
                        <p className="link">Manage Your Content and Devices</p>
                        <p className="link">Amazon Assistant</p>
                        <p className="link">Help</p>
                    </div>
                </div>
            </div>

            {/* Middle Footer */}
            <div className="bg-amazon_blue-light py-4 flex justify-center">
                <Image
                    src="https://links.papareact.com/f90"
                    width={80}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>

            {/* Bottom Footer */}
            <div className="bg-amazon_blue text-gray-300 text-xs">
                <div className="grid gap-4 lg:max-w-screen-xl lg:mx-auto
                    grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">

                    {/* Col 1 */}
                    <div className="grid gap-4 p-10">
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon Music</h6>
                            <p className="group-hover:underline text-gray-500">Stream Millions</p>
                            <p className="group-hover:underline text-gray-500">of songs</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Sell on</h6>
                            <h6 className="group-hover:underline">Amazon</h6>
                            <p className="group-hover:underline text-gray-500">Start a Selling</p>
                            <p className="group-hover:underline text-gray-500">Account</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Book</h6>
                            <h6 className="group-hover:underline font-bold">Depository</h6>
                            <p className="group-hover:underline text-gray-500">Books With Free</p>
                            <p className="group-hover:underline text-gray-500">Delivery</p>
                            <p className="group-hover:underline text-gray-500">Worldwide</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">IMDB</h6>
                            <p className="group-hover:underline text-gray-500">Movies,TV</p>
                            <p className="group-hover:underline text-gray-500">& Celebrities</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Ring</h6>
                            <p className="group-hover:underline text-gray-500">Smart Home</p>
                            <p className="group-hover:underline text-gray-500">Security</p>
                            <p className="group-hover:underline text-gray-500">Systems</p>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div className="grid gap-4 p-10">
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Advertising</h6>
                            <p className="group-hover:underline text-gray-500">Find, attract and</p>
                            <p className="group-hover:underline text-gray-500">engage</p>
                            <p className="group-hover:underline text-gray-500">Customers</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Box Office Mojo</h6>
                            <p className="group-hover:underline text-gray-500">Find Movie</p>
                            <p className="group-hover:underline text-gray-500">Box Office Data</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">IMDBPro</h6>
                            <p className="group-hover:underline text-gray-500">Get Info</p>
                            <p className="group-hover:underline text-gray-500">Entertainment</p>
                            <p className="group-hover:underline text-gray-500">Professionals</p>
                            <p className="group-hover:underline text-gray-500">Need</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Business</h6>
                            <p className="group-hover:underline text-gray-500">Everything for</p>
                            <p className="group-hover:underline text-gray-500">Your Business</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">eero WIFI</h6>
                            <p className="group-hover:underline text-gray-500">Stream 4K Video</p>
                            <p className="group-hover:underline text-gray-500">in Every Room</p>
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div className="grid gap-4 p-10">
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Advertising</h6>
                            <p className="group-hover:underline text-gray-500">Find, attract and</p>
                            <p className="group-hover:underline text-gray-500">engage</p>
                            <p className="group-hover:underline text-gray-500">Customers</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Box Office Mojo</h6>
                            <p className="group-hover:underline text-gray-500">Find Movie</p>
                            <p className="group-hover:underline text-gray-500">Box Office Data</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">IMDBPro</h6>
                            <p className="group-hover:underline text-gray-500">Get Info</p>
                            <p className="group-hover:underline text-gray-500">Entertainment</p>
                            <p className="group-hover:underline text-gray-500">Professionals</p>
                            <p className="group-hover:underline text-gray-500">Need</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Business</h6>
                            <p className="group-hover:underline text-gray-500">Everything for</p>
                            <p className="group-hover:underline text-gray-500">Your Business</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">eero WIFI</h6>
                            <p className="group-hover:underline text-gray-500">Stream 4K Video</p>
                            <p className="group-hover:underline text-gray-500">in Every Room</p>
                        </div>
                    </div>

                    {/* Col 4 */}
                    <div className="grid gap-4 p-10">
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Advertising</h6>
                            <p className="group-hover:underline text-gray-500">Find, attract and</p>
                            <p className="group-hover:underline text-gray-500">engage</p>
                            <p className="group-hover:underline text-gray-500">Customers</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Box Office Mojo</h6>
                            <p className="group-hover:underline text-gray-500">Find Movie</p>
                            <p className="group-hover:underline text-gray-500">Box Office Data</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">IMDBPro</h6>
                            <p className="group-hover:underline text-gray-500">Get Info</p>
                            <p className="group-hover:underline text-gray-500">Entertainment</p>
                            <p className="group-hover:underline text-gray-500">Professionals</p>
                            <p className="group-hover:underline text-gray-500">Need</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Business</h6>
                            <p className="group-hover:underline text-gray-500">Everything for</p>
                            <p className="group-hover:underline text-gray-500">Your Business</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">eero WIFI</h6>
                            <p className="group-hover:underline text-gray-500">Stream 4K Video</p>
                            <p className="group-hover:underline text-gray-500">in Every Room</p>
                        </div>
                    </div>

                    {/* Col 5 */}
                    <div className="grid gap-4 p-10">
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Advertising</h6>
                            <p className="group-hover:underline text-gray-500">Find, attract and</p>
                            <p className="group-hover:underline text-gray-500">engage</p>
                            <p className="group-hover:underline text-gray-500">Customers</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Box Office Mojo</h6>
                            <p className="group-hover:underline text-gray-500">Find Movie</p>
                            <p className="group-hover:underline text-gray-500">Box Office Data</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">IMDBPro</h6>
                            <p className="group-hover:underline text-gray-500">Get Info</p>
                            <p className="group-hover:underline text-gray-500">Entertainment</p>
                            <p className="group-hover:underline text-gray-500">Professionals</p>
                            <p className="group-hover:underline text-gray-500">Need</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Business</h6>
                            <p className="group-hover:underline text-gray-500">Everything for</p>
                            <p className="group-hover:underline text-gray-500">Your Business</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">eero WIFI</h6>
                            <p className="group-hover:underline text-gray-500">Stream 4K Video</p>
                            <p className="group-hover:underline text-gray-500">in Every Room</p>
                        </div>
                    </div>

                    {/* Col 6 */}
                    <div className="grid gap-4 p-10">
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Advertising</h6>
                            <p className="group-hover:underline text-gray-500">Find, attract and</p>
                            <p className="group-hover:underline text-gray-500">engage</p>
                            <p className="group-hover:underline text-gray-500">Customers</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Box Office Mojo</h6>
                            <p className="group-hover:underline text-gray-500">Find Movie</p>
                            <p className="group-hover:underline text-gray-500">Box Office Data</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">IMDBPro</h6>
                            <p className="group-hover:underline text-gray-500">Get Info</p>
                            <p className="group-hover:underline text-gray-500">Entertainment</p>
                            <p className="group-hover:underline text-gray-500">Professionals</p>
                            <p className="group-hover:underline text-gray-500">Need</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Business</h6>
                            <p className="group-hover:underline text-gray-500">Everything for</p>
                            <p className="group-hover:underline text-gray-500">Your Business</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">eero WIFI</h6>
                            <p className="group-hover:underline text-gray-500">Stream 4K Video</p>
                            <p className="group-hover:underline text-gray-500">in Every Room</p>
                        </div>
                    </div>

                    {/* Col 7 */}
                    <div className="grid gap-4 p-10">
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Advertising</h6>
                            <p className="group-hover:underline text-gray-500">Find, attract and</p>
                            <p className="group-hover:underline text-gray-500">engage</p>
                            <p className="group-hover:underline text-gray-500">Customers</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Box Office Mojo</h6>
                            <p className="group-hover:underline text-gray-500">Find Movie</p>
                            <p className="group-hover:underline text-gray-500">Box Office Data</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">IMDBPro</h6>
                            <p className="group-hover:underline text-gray-500">Get Info</p>
                            <p className="group-hover:underline text-gray-500">Entertainment</p>
                            <p className="group-hover:underline text-gray-500">Professionals</p>
                            <p className="group-hover:underline text-gray-500">Need</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">Amazon</h6>
                            <h6 className="group-hover:underline font-bold">Business</h6>
                            <p className="group-hover:underline text-gray-500">Everything for</p>
                            <p className="group-hover:underline text-gray-500">Your Business</p>
                        </div>
                        <div className="group cursor-pointer">
                            <h6 className="group-hover:underline font-bold">eero WIFI</h6>
                            <p className="group-hover:underline text-gray-500">Stream 4K Video</p>
                            <p className="group-hover:underline text-gray-500">in Every Room</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-6 max-w-screen-2xl mx-auto">
                    <p className="link mx-3">Conditions of Use</p>
                    <p className="link mx-3">Privacy Notice</p>
                    <p className="link mx-3">Interest-Based Ads</p>
                    <p>&copy; 1994-2021,Clone.com,Inc.</p>
                </div>
            </div>
        </footer>
    );
};


