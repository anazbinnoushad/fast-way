import { useEffect, useState } from "react";
import Navabar from "../components/Navabar";
import ProductList from "../components/ProductList";
import axios from "axios"
import Filterbar from "../components/Filterbar";
import { useSearchParams } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    let [searchParams, setSearchParams] = useSearchParams();


    const GetAPI = () => {
        setLoading(true);
        axios({
            method: 'get',
            url: 'https://dummyjson.com/products?limit=100',
        }).then((response) => {
            setLoading(false);
            setData(response?.data?.products)
        })
    }

    useEffect(() => {
        GetAPI()
    }, [])

    const GetCategories = (data: any) => {
        let categories
        if (data?.length > 0) {
            categories = Object.values(data?.reduce((val: any, { category }: any) => {
                val[category] = { title: category }
                return val;
            }, {}))
        }
        return categories || []
    }

    const FilteredCategories = () => {
        if (searchParams?.get("category")) {
            return GetCategories(data)?.filter((val: any) => val?.title === searchParams?.get("category"))
        }
        else if (searchParams?.get("brand")) {
            let filteredProducts = data?.filter((val: any) => val?.brand === searchParams?.get("brand"))
            return GetCategories(filteredProducts)
        }
        else {
            return GetCategories(data)
        }
    }

    const SortedProducts = (type: any) => {
        switch (type) {
            case "price-low-to-high":
                return data.sort((first: any, second: any) => first?.price - second?.price);
            case "price-high-to-low":
                return data.sort((first: any, second: any) => second?.price - first?.price);
            case "high-rated":
                return data.sort((first: any, second: any) => second?.rating - first?.rating);
            case "discount":
                return data.sort((first: any, second: any) => second?.discountPercentage - first?.discountPercentage);
            default:
                return data
        }
    }

    const FilteredProducts = (value: any) => {
        let products
        if (searchParams?.get("brand")) {
            products = data?.filter((val: any) => val?.brand === searchParams?.get("brand"))
        } else if (searchParams?.get("sortby")) {
            products = SortedProducts(searchParams?.get("sortby"))
        } else {
            products = data?.filter((val: any) => val?.category == value?.title)
        }
        return products || []
    }


    return (
        <div className=" flex justify-center">
            <div className=" max-w-[1280px] w-full">
                <Navabar />
                <div className=" grid grid-cols-5 py-10 gap-5">
                    <div className=" col-span-1">
                        <Filterbar data={data} setSearchParams={setSearchParams} searchParams={searchParams} />
                    </div>
                    <div className=" col-span-4">
                        {FilteredCategories()?.map((value: any, index: number) => (
                            <ProductList key={`CAT_${index}`} title={value?.title} data={FilteredProducts(value)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;