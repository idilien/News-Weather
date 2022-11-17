import  axios from "axios";
import { useState, useEffect, createContext } from "react";

const ClimateContext = createContext()

const ClimateProvider = ({children}) => {

        //NEWS
        const [category, setCategory] = useState('general')
        const [news, setNews] = useState([])
        const [page, setPage] = useState(1)
        const [totalNews, setTotalNews] = useState(0)
       
        useEffect(() => {
                const callNewsAPI = async () => {
                        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_NEW}`
                        const {data:data3} = await axios(url)
                        console.log(data3)
                        setNews(data3.articles)
                        setTotalNews(data3.totalResults)
                        setPage(1)
                }
                callNewsAPI()
        }, [category])

        useEffect(() => {
                const callNewsAPI = async () => {
                        const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_NEW}`
                        const {data:data3} = await axios(url)
                        console.log(data3)
                        setNews(data3.articles)
                        setTotalNews(data3.totalResults)

                }
                callNewsAPI()
        }, [page])
        

        const handleChangeCategory = e => {
            setCategory(e.target.value)
        }

        const handleChangePage = (e, value) => {
           setPage(value)
        }


    //WEATHER
    const [search, setSearch] = useState({
        city: 'New York',
        country: 'US'
    })

    const [resultWeather, setResultWeather] = useState({})
    const [spinner, setSpinner] = useState(false)
    const [failResult, setFailResult] = useState(false)
    
    const dataSearch = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const conectOpenWeather = async datas => {
            setSpinner(true)
            setFailResult(false)
        try {
            const {city, country} = datas
            const APIKey =  import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${APIKey}`
            const {data} = await axios(url)
            const {lat, lon} = data[0]
            const urlData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`
            const {data:data2} = await axios(urlData)
            setResultWeather(data2)
        } catch (error) {
            setFailResult('No Results')
        }finally{
            setSpinner(false)
        }
    }

    useEffect(() => {
   conectOpenWeather(search)
    }, [])
    
    return(
        <ClimateContext.Provider
                    value={{
                            search,
                            dataSearch,
                            conectOpenWeather,
                            resultWeather,
                            spinner,
                            failResult,
                            category,
                            handleChangeCategory,
                            news,
                            totalNews,
                            handleChangePage,
                            page
                     }}
        >
                     {children}
        </ClimateContext.Provider>
    )
}

export {
    ClimateProvider
}

export default ClimateContext