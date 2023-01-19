import { useEffect, useState } from "react";
import Navabar from "../components/Navabar";
import ProductList from "../components/ProductList";
import axios from "axios"
import { useSelector } from "react-redux"

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

const Home = () => {
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)


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
    let cart = useSelector((state: any) => state?.Cart)
    console.log(`Home,  : Data`, data)
    console.log(`Home,  : cart`, cart)


    return (
        <div className=" flex justify-center">
            <div className=" max-w-[1280px] w-full">
                <Navabar />
                <div>
                    {GetCategories(data)?.map((value: any, index: number) => (
                        <ProductList key={`CAT_${index}`} title={value?.title} data={data?.filter((val: any) => val?.category == value?.title)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;