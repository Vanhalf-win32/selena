import { Header, Hero, Services, AboutUs, WhyChooseUs, Documents, Consultation, Footer } from "./components";
import {
  BrowserRouter as Router, Routes,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router";


function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
              <Routes>
                <Route exact path="/" element={ 
                  <>
                    <Hero/>
                    <Services/>
                    <AboutUs/>
                    <WhyChooseUs/>
                    <Consultation/>
                  </>
                }/>
                <Route path="/documents" element={<Documents/>}/>
              </Routes>    
        </BrowserRouter>
      <Footer/> 
    </>   
  );
}

export default App;
