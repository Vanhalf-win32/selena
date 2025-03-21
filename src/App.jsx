import { Header, Hero, Services, AboutUs, WhyChooseUs, Documents, Consultation, Footer } from "./components";
import {
  BrowserRouter as Router, Routes,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router";
import Doctors from "./components/Doctors";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Price from "./components/Price";


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
                <Route path="/documents" element={<Documents/>} />
                <Route path="/doctors" element={<Doctors/>} />
                <Route path="/aboutUs" element={<About/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/price" element={<Price/>} />
              </Routes>    
        </BrowserRouter>
      <Footer/> 
    </>   
  );
}

export default App;
