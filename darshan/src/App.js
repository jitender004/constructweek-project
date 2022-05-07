import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Cart } from "./components/Cart";
import { Login } from "./components/Login";
import { Sign } from "./components/Sign";
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
     
     <Navbar />
      <Routes>
      <Route path={'/login'} element={<Login />}></Route>
      <Route path={'/cart'} element={<Cart />}></Route>
      <Route path={'/sign'} element={<Sign />}></Route>
      </Routes>
     <Footer />
     
     
    </div>
  );
}

export default App;
