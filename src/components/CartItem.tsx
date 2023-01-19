const CartItem = ({ data }: any) => {
    return (
        <div className=" border-b last:borde-0 p-2 flex gap-2">
            <div className=" w-20 aspect-square">
                <img src={data?.thumbnail} alt="product" />
            </div>
            <div className=" flex flex-col">
                <a className=" text-lg font-semibold">{data?.title}</a>
                <a>${data?.price}</a>
            </div>
        </div>
    );
}

export default CartItem;