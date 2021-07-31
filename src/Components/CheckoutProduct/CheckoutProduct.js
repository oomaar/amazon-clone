import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";

export const CheckoutProduct = ({ item }) => {
    return (
        <div className="grid grid-cols-5 bg-gray-700 p-2 rounded-md">
            <div className="flex justify-center shadow-md transform hover:scale-105 cursor-pointer
                transition duration-200 rounded-md bg-white">
                <Image
                    src={item.image}
                    height={200}
                    width={200}
                    objectFit="contain"
                />
            </div>

            <div className="col-span-3 mx-5">
                <p>{item.title}</p>
                <div className="flex">
                    {Array(item.rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{item.description}</p>
                <div className="mb-5 text-gray-100">
                    <Currency quantity={item.price} currency='EGP' />
                </div>
                {item.hasPrime && (
                    <div className="flex items-center space-x-2 my-5">
                        <img
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                            loading="lazy"
                        />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-self-end space-y-2 my-auto">
                <button className="button mt-auto text-gray-900">Add to Basket</button>
                <button className="button mt-auto text-gray-900">Remove from Basket</button>
            </div>
        </div>
    );
};
