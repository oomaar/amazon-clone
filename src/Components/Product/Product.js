import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

export const Product = ({
    id,
    title,
    price,
    description,
    category,
    image,
}) => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    const [hasPrime] = useState(Math.random() < 0.5);

    const dispatsh = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
        };

        dispatsh(addToBasket(product));
    };

    return (
        <div className="relative flex flex-col m-5 p-10 z-30 bg-gray-800 rounded-lg shadow-lg">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">
                {category}
            </p>
            <div className="flex justify-center shadow-md p-3 transform hover:scale-105 cursor-pointer
                transition duration-200 rounded-md bg-white">
                <Image
                    src={image}
                    width={200}
                    height={200}
                    objectFit="contain"
                />
            </div>
            <h4 className="my-3 text-gray-100">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2 text-gray-100">{description}</p>

            <div className="mb-5 text-gray-100">
                <Currency quantity={price} currency='EGP' />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 my-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button onClick={addItemToBasket} className="mt-auto button">Add to basket</button>
        </div>
    );
};
