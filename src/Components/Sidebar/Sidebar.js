import { UserCircleIcon, XIcon, ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/client";

export const Sidebar = ({ setSidebarShow }) => {
    const [session] = useSession();

    return (
        <div className="fixed h-full z-50 w-full top-0 bg-gray-900 bg-opacity-50
            transition duration-200 ease-in">
            <div className="w-full sm:w-1/2 lg:w-1/5 bg-white h-screen overflow-y-scroll">
                <div className="relative bg-amazon_blue-light h-12 p-5 pb-10 flex cursor-pointer">
                    <XIcon
                        className="h-6 text-white absolute top-2 right-3 cursor-pointer"
                        onClick={() => setSidebarShow(false)}
                    />
                    <UserCircleIcon className="h-6 text-white px-4" />
                    <p className="text-white font-bold">
                        {session ? `Hello, ${session.user.name}` : "Hello, Sign In"}
                    </p>
                </div>

                <div className="sidebarContainer">
                    <h3 className="text-xl font-bold mb-4">Digital Content & Devices</h3>
                    <div className="sidebarBox">
                        <p>Amazon Music</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>Kindle E-readers & Books</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>Appstore for Android</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                </div>

                <div className="sidebarContainer">
                    <h3 className="text-xl font-bold mb-4">Shop By Department</h3>
                    <div className="sidebarBox">
                        <p>Electronics</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>Computers</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>Smart Home</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>Arts & Crafts</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>See All</p>
                        <ChevronDownIcon className="h-6" />
                    </div>
                </div>

                <div className="sidebarContainer">
                    <h3 className="text-xl font-bold mb-4">Programs & Features</h3>
                    <div className="sidebarBox">
                        <p>Gift Cards</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>#FoundItOnAmazon</p>
                    </div>
                    <div className="sidebarBox">
                        <p>Amazon Live</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>International Shopping</p>
                        <ChevronRightIcon className="h-6" />
                    </div>
                    <div className="sidebarBox">
                        <p>See All</p>
                        <ChevronDownIcon className="h-6" />
                    </div>
                </div>

                <div className="sidebarContainer">
                    <h3 className="text-xl font-bold mb-4">Help & Settings</h3>

                    <div className="sidebarBox">
                        <p>Your Account</p>
                    </div>
                    <div className="sidebarBox flex-row-reverse justify-end items-center">
                        <p className="text-xs">English</p>
                        <GlobeAltIcon className="h-4 mr-2" />
                    </div>
                    <div className="sidebarBox">
                        <p className="text-xs">United States</p>
                    </div>
                    <div className="sidebarBox">
                        <p className="text-xs">Customer Service</p>
                    </div>
                    <div className="sidebarBox">
                        <p className="text-xs">Sign In</p>
                    </div>
                </div>

            </div>

        </div>
    );
};
