import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

type CartProps = {
    onClose: () => void
}

const Cart = ({ onClose }: CartProps) => {
    let cart = useSelector((state: any) => state?.Cart)
    return (
        <div className="text-black w-[400px] h-screen bg-white">
            <div className=" flex flex-row-reverse justify-between items-center p-4 border-b">
                <a className=" uppercase text-gray-800 font-semibold text-sm">
                    CART
                </a>
                <div className=" w-6 bg-slate-100 aspect-square rounded-md flex justify-center items-center cursor-pointer" onClick={onClose}>
                    <XMarkIcon className=" text-black w-5" />
                </div>
            </div>
            <div className=" p-4 flex flex-col gap-2">
                {cart?.map((item: any, idx: number) => (
                    <CartItem data={item} key={`CRTI_${idx}`} />
                ))}
            </div>
        </div>
    );
}

export default Cart;