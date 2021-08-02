import Image from "next/image";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { CheckoutProduct } from "../Components";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

const Checkout = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    return (
        <div className="bg-gray-700">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>E-commerce Web-Site</title>
            </Head>

            {/* lg:flex makes it not responsive in small and medium screens */}
            <main className="lg:flex max-w-screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />

                    <div className="bg-gray-800 text-gray-100 flex flex-col p-5 space-y-10 rounded-md">
                        {items.length === 0 ? (
                            <>
                                <h1 className="text-3xl border-b pb-4">
                                    Your Basket is Empty !
                                </h1>

                                <div className="flex justify-center">
                                    <ShoppingCartIcon className="h-72" />
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="text-3xl border-b pb-4">
                                    Shopping Basket
                                </h1>

                                {items.map((item, i) => (
                                    <CheckoutProduct item={item} key={i} />
                                ))}
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-col shadow-md bg-gray-800 p-10 lg:rounded-md lg:mt-4 lg:mr-4">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap text-gray-100">
                                Subtotal ({items.length})
                                {items.length > 1 ? " Items" : " Item"}: {" "}
                                <span className="font-bold text-gray-400">
                                    <Currency quantity={total} currency='EGP' />
                                </span>
                            </h2>
                            <button
                                disabled={!session}
                                className={
                                    `
                                button mt-2 
                                ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}
                                `
                                }
                            >
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Checkout;