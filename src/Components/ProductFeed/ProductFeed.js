import { Product } from "..";

export const ProductFeed = ({ products }) => {
    const productsArray = products.map(({
        id,
        title,
        price,
        description,
        category,
        image
    }) => (
        <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
        />
    ));

    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        md:-mt-52 mx-auto">
            {productsArray.slice(0, 4)}
            <img
                src="https://links.papareact.com/dyz"
                alt=""
                className="md:col-span-full"
            />
            <div className="md:col-span-2">
                {productsArray.slice(4, 5)}
            </div>
            {productsArray.slice(5, products.length)}
            {productsArray}
        </div>
    );
};
