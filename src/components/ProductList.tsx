import ProductCard from "./ProductCard";

type ProductListProps = {
    title: string,
    data: any
}

const ProductList = ({ title, data }: ProductListProps) => {
    return (
        <div className="flex flex-col py-5 gap-5">
            <a className=" text-2xl font-bold capitalize">
                {title?.replaceAll("-", " ")}
            </a>
            <div className=" flex flex-wrap gap-5 md:gap-10 md:my-4 justify-center">
                {data?.map((item: any, idx: any) => (
                    <ProductCard key={`PID_${idx}`} data={item} />
                ))}
            </div>
        </div>

    );
}

export default ProductList;