import { useContext } from "react"
import ClimateContext from "../context/ClimateProvider"



const useClimate = () => {
  return useContext(ClimateContext)
}

export default useClimate