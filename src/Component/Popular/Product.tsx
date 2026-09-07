import { FaStar } from "react-icons/fa";
import type { ProductType } from "../Type/ProductType";


export interface ProductProps {
    product: ProductType
}

export default function Product({ product }: ProductProps) {
    const { name, rating, price, img } = product;
    return (
        <div className="product flex gap-4 p-4 bg-white rounded-xl">
            <img className="p-2 bg-[#EFEBE3] rounded-xl" src={img} alt={product.name} />
            <div className="product-details">
                <p className="flex gap-1 items-center"><FaStar className="text-amber-400" /> {rating}</p>
                <h3 className="text-[18px] font-semibold">{name}</h3>
                <p>Price: ${price}</p>
                {/* <button className="cursor-pointer">Add to Cart</button> */}
            </div>
        </div>
    )
}