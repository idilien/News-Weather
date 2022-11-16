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
              <div className="app-container">
              <AppWeather/>
              <FormNews/>    
              <ListNews/>        
              </div>
          </ClimateProvider>
          

    </>
  )
}

export default App
