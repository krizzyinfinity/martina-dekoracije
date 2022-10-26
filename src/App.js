import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Aranzmani from "./pages/Aranzmani";
import Home from "./pages/Home";

import Torte from "./pages/Torte";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aranzmani" element={<Aranzmani />} />
        
        <Route path="/torte" element={<Torte />} />
       
       
      </Routes>
   
     <Footer />
    </div>
  );
}

export default App;
