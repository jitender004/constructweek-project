import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
// import { Cart } from "./components/Cart";
import { Login } from "./components/Login/Login";
import { Sign } from "./components/Signup/Sign";
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
     
     <Navbar />
    
      <Routes>
        <Route path={'/login'} element={<Login />}></Route>
        {/* <Route path={'/cart'} element={<Cart />}></Route> */}
        <Route path={'/sign'} element={<Sign />}></Route>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
