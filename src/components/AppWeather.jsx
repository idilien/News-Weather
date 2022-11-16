import useClimate from "../hooks/useClimate"
import FormZone from "./FormZone"
import ResultZone from "./ResultZone"
import Spinner from "./Spinner"



const AppWeather = () => {

  const {resultWeather, spinner, failResult} = useClimate()

  return (
    <>
        <main className="main-columns">
                <FormZone/>
                { spinner ?<Spinner/> :
                resultWeather?.name ? <ResultZone/> :
                failResult ? <p>{failResult}</p>
                :<p></p>
                }
                
        </main>
    
    </>
  )
}

export default AppWeather