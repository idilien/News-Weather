import useClimate from "../hooks/useClimate"



const ResultZone = () => {

    const {resultWeather} = useClimate()
    const {name, main} = resultWeather

    // const kelvin = 273.15

  return (
    <div className="container climate">
        <h3 className="title">Weather in {name}</h3>
        <div className="temp_max_min">
                <p className="temp_today">
                    Today {parseInt(main.temp )}<span>o</span> 
                </p>
                <svg className="cloud" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
        </div>
        <div className="temp_max_min">
                <p>
                    max {parseInt(main.temp_max )}<span>o</span>
                </p>
                <p>
                    min {parseInt(main.temp_min )}<span>o</span>
                </p>
        </div>
        
    </div>
  )
}

export default ResultZone