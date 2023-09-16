import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header"
import Navbar from "./Components/Header/Navbar";
import Home from './Routes/Home';
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";

function App() {
  return (
      <div className="App">
        <Header>
        <Navbar/>
        </Header>
        <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
