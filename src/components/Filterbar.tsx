import FilterList from "./FilterList"

const Filters = [
    { title: "Categories", type: "category" },
    { title: "Brands", type: "brand" },
]

const Filterbar = ({ data, setSearchParams, searchParams }: any) => {

    return (
        <div className=" bg-slate-100 rounded-md p-2 flex flex-col gap-2">
            <a className=" text-lg">Filters</a>
            <div className=" flex flex-col gap-1">
                {Filters?.map((item: any, idx: number) => (
                    <FilterList key={`FLI_${idx}`} data={data} searchParams={searchParams} setSearchParams={setSearchParams} type={item?.type} title={item?.title} />
                ))}
            </div>

        </div>
    );
}

export default Filterbar;
