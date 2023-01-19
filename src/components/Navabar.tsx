import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import Cart from "./Cart";
import FWSideView from "./FWComponents/FWSideView";
import { useSelector } from "react-redux"

const Navabar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    let cart = useSelector((state: any) => state?.Cart)

    return (
        <div className=" flex justify-between items-center py-4 border-b">
            <div>
                <a className=" text-2xl text-blue-500">FAST WAY</a>
            </div>
            <div className=" cursor-pointer relative" onClick={() => setIsOpen(true)}>
                {cart?.length > 0 && (
                    <div className=" absolute left-3 bg-blue-400 flex items-center justify-center w-3 h-3 rounded-full">
                        <a className=" text-white text-[8px]">{cart?.length}</a>
                    </div>
                )}
                <div className=" flex gap-2">
                    <ShoppingCartIcon className=" w-5" />
                    <a>CART</a>
                </div>
            </div>
            <FWSideView show={isOpen} onClose={() => setIsOpen(false)}>
                <Cart onClose={() => setIsOpen(false)} />
            </FWSideView>
        </div>
    );
}

export default Navabar;