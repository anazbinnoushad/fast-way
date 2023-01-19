import { ShoppingCartIcon } from "@heroicons/react/24/outline"
const Navabar = () => {
    return (
        <div className=" flex justify-between items-center py-4 border-b">
            <div>
                <a className=" text-2xl text-blue-500">FAST WAY</a>
            </div>
            <div className=" cursor-pointer">
                <div className=" flex gap-2">
                    {/* <ShoppingCart /> */}
                    <ShoppingCartIcon className=" w-5" />
                    <a>CART</a>
                </div>
            </div>
        </div>
    );
}

export default Navabar;