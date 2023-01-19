import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import Cart from "./Cart";
import FWSideView from "./FWComponents/FWSideView";
const Navabar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className=" flex justify-between items-center py-4 border-b">
            <div>
                <a className=" text-2xl text-blue-500">FAST WAY</a>
            </div>
            <div className=" cursor-pointer" onClick={() => setIsOpen(true)}>
                <div className=" flex gap-2">
                    {/* <ShoppingCart /> */}
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