type FilterItemProps = {
    item: any,
    setSearchParams: any,
    searchParams: any,
    type: "category" | "brand" | "sortby"
}

const FilterItem = ({ item, setSearchParams, searchParams, type }: FilterItemProps) => {

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

export default FilterItem