import FWButton from "./FWComponents/FWButton";
import { useDispatch } from "react-redux"
import { AddtoCart } from "../redux/ClientActions";

let item = {
    discount_rate: "20",
    image: "./Productimage.png",
    name: "Perfume",
    category: "lifestyle",
    current_price: "300",
    actual_price: "500"
}

const ProductCard = ({ data }: any) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        console.log(`ProductCard,  : data`, data)
        dispatch(AddtoCart(data))
    }
    return (
        <div className="w-52 flex flex-col gap-3 relative">
            <div className=" absolute -right-5 top-5 px-2 py-1 text-xs bg-red-500 text-white font-semibold rounded-3xl">{item?.discount_rate}% OFF</div>
            <div className=" w-[200px] aspect-square bg-secondary flex justify-center items-center rounded-3xl">
                <div className=" relative p-10 overflow-clip">
                    <img src={data?.thumbnail} alt="product" />
                </div>
            </div>
            <div className=" flex flex-col gap-3">
                <a className=" text-lg font-semibold">{data?.title}</a>
                <div className=" flex gap-2">
                    <div className={`capitalize w-fit px-3 py-1 text-xs font-bold rounded-xl bg-green-50 text-green-500`}>
                        <a>{data?.category}</a>
                    </div>
                    <div className=" flex items-center gap-1">
                        {item?.discount_rate && (<a className=" text-xs text-slate-500 line-through">{data?.price?.toFixed(2)}</a>)}
                        <a className=" text-base font-semibold">{(data?.price - (data?.price * (data?.discountPercentage / 100)))?.toFixed(2)}</a>
                    </div>
                </div>
            </div>
            <div>
                <FWButton text={"ADD TO CART"} onClick={() => handleAddToCart()} />
            </div>
        </div>
    );
}

export default ProductCard;