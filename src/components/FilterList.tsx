import { useState } from "react"
type FilterListProps = {
    data: any,
    setSearchParams: any,
    searchParams: any,
    type: "category" | "brand",
    title: string
}

const FilterList = ({ data, setSearchParams, searchParams, type, title }: FilterListProps) => {
    const [show, setShow] = useState<boolean>(false)

    const GetFilters = (data: any) => {
        let categories
        let brands
        if (data?.length > 0) {
            categories = Object.values(data?.reduce((val: any, { category }: any) => {
                val[category] = { title: category }
                return val;
            }, {}));
            brands = Object.values(data?.reduce((val: any, { brand }: any) => {
                val[brand] = { title: brand }
                return val;
            }, {}))
        }
        return type === "brand" ? brands || [] : categories || []
    }

    return (
        <div>
            <div onClick={() => setShow(!show)} className=" text-sm font-medium flex items-center px-3 py-1 cursor-pointer justify-between hover:rounded-md hover:bg-blue-100">
                <a>{title}</a>
                {show ? <a>-</a> : <a>+</a>}
            </div>
            {show && (
                <div className=" flex flex-col px-4">
                    {GetFilters(data)?.map((item: any, idx: number) => (
                        <FilterItem item={item} key={`BR_${idx}`} setSearchParams={setSearchParams} searchParams={searchParams} type={type} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FilterList;

type FilterItemProps = {
    item: any,
    setSearchParams: any,
    searchParams: any,
    type: "category" | "brand" | "sortby"
}

export const FilterItem = ({ item, setSearchParams, searchParams, type }: FilterItemProps) => {
    const handleCheck = () => {
        if (searchParams?.get(type) === item?.title) {
            setSearchParams({})
        } else {
            setSearchParams({ [type]: item?.title })
        }
    }
    return (
        <div className=" p-1 flex gap-2 items-center cursor-pointer" onClick={() => handleCheck()}>
            <input type="checkbox" checked={item?.title == searchParams?.get(type)} onChange={() => handleCheck()} />
            <a className=" capitalize text-sm">{item?.title?.replaceAll("-", " ")}</a>
        </div>
    )
}