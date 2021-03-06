import { useState } from "react";
import { Sidebar } from "..";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import {
    SearchIcon,
    ShoppingCartIcon,
    MenuIcon
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

export const Header = () => {
    const [sidebarShow, setSidebarShow] = useState(false);
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <div>
            {sidebarShow && <Sidebar setSidebarShow={setSidebarShow} />}
            <header className="fixed top-0 right-0 left-0 z-40">
                {/* Top Nav */}
                <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                    {/* Left */}
                    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                        <Image
                            src="https://links.papareact.com/f90"
                            width={150}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer"
                            onClick={() => router.push('/')}
                        />
                    </div>

                    {/* Search */}
                    <div className="hidden bg-yellow-400 hover:bg-yellow-500 sm:flex items-center
                    h-10 rounded-md flex-grow cursor-pointer flex-shrink">
                        <input
                            type="text"
                            className="p-2 w-6 flex-grow h-full rounded-l-md focus:outline-none px-4"
                        />
                        <SearchIcon className="h-12 p-4" />
                    </div>

                    {/* Right */}
                    <div className="text-white flex items-center text-xs space-x-6 px-6 whitespace-nowrap">
                        <div onClick={!session ? signIn : signOut} className="link">
                            <p>
                                {session ? `Hello, ${session.user.name}` : "Hello, Sign In"}
                            </p>
                            <p className="font-extrabold md:text-sm">Account & Lists</p>
                        </div>

                        <div className="link">
                            <p>Returns</p>
                            <p className="font-extrabold md:text-sm">& Orders</p>
                        </div>

                        <div
                            className="relative flex items-center link"
                            onClick={() => router.push('/checkout')}
                        >
                            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400
                            text-center rounded-full text-black font-bold">
                                {items.length}
                            </span>
                            <ShoppingCartIcon className="h-10" />
                            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Nav */}
                <div
                    className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6"
                    onClick={() => setSidebarShow(true)}
                >
                    <p className="link flex items-center">
                        <MenuIcon className="h-6 mr-1" />
                        All
                    </p>
                    <p className="link">Prime Video</p>
                    <p className="link">Amazon Business</p>
                    <p className="link">Today's Deals</p>
                    <p className="link hidden lg:inline-flex">Electronics</p>
                    <p className="link hidden lg:inline-flex">Food & Grocery</p>
                    <p className="link hidden lg:inline-flex">Prime</p>
                    <p className="link hidden lg:inline-flex">Buy Again</p>
                    <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                    <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                </div>
            </header>
        </div>
    );
};
