import Image from "next/image";

const Checkout = () => {
    return (
        <div className="bg-gray-700">
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
                        <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
                    </div>
                </div>

                {/* Right */}
                <div></div>
            </main>
        </div>
    );
};

export default Checkout;