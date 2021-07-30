import Image from "next/image";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { CheckoutProduct } from "../Components";

const Checkout = () => {
    const items = useSelector(selectItems);
    return (
        <div className="bg-gray-700">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>E-commerce Web-Site</title>
            </Head>

            {/* lg:flex makes it not responsive in small and medium screens */}
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}
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

                {/* Right */}
                <div></div>
            </main>
        </div>
    );
};

export default Checkout;