import { useState } from "react"
import useClimate from "../hooks/useClimate"



const FormZone = () => {

  const {search, dataSearch, conectOpenWeather} = useClimate({})
  const [alert, setAlert] = useState('')
  
  const {city, country} = search
  
  const handleSubmit = (e) => {
    e.preventDefault()
      if((Object.values(search)).includes('')){
       setAlert('All fields are required')
       return
      }
      setAlert('')
      conectOpenWeather(search)
    }
    
  return (
          <div className="container">   
          <form onSubmit={handleSubmit}>
            <div className="camp">
              <label htmlFor="city">City</label>
              <input 
                    type="text" 
                    id="city"
                    name="city"
                    onChange={dataSearch}
                    value={city}
                    />
            </div>
            <div className="camp">
              <label htmlFor="country">Country</label>
              <select
                    id="country"
                    name="country"
                    onChange={dataSearch}
                    value={country}
                    >
                      <option value="Select Country" disabled> -- Select Country -- </option>
                      <option value="ES">Spain</option>
                      <option value="US">United States</option>
                      <option value="GB">Great Britain</option>
                      <option value="CO">Germany</option>
                      <option value="FR">France</option>
                    </select>
            </div>
            {alert && <p className="alert">{alert}</p> }     
        <input 
              type="submit"
              value='Search'
              />
      </form>
      
    </div>
  )
}

export default FormZone