import Header from "./components/Header"
import AppWeather from "./components/AppWeather"
import FormNews from "./components/News/FormNews";
import { ClimateProvider } from "./context/ClimateProvider"
import ListNews from "./components/News/ListNews";




function App() {
  
  return (
    <>
          
          <ClimateProvider>     
              <Header/>
             
              <AppWeather/>
              <FormNews/>    
              <ListNews/>        
             
          </ClimateProvider>
          

    </>
  )
}

export default App
