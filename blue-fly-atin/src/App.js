import { Cartpage } from "./components/Cartpage";
import { Payment } from "./components/Payment";
import {Routes,Route} from "react-router-dom";
import { Login } from "./components/Login";
import { CreateAccount } from "./components/CreateAccount";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/navbar/Home";
import { Cart } from "./components/navbar/Cart";

function App({children}) {
  return (
    <div>
      {/* <Cartpage></Cartpage> */}
      {/* <Routes>
        <Route path={"/payment"} element={<Payment></Payment>}></Route>
      </Routes> */}
      {/* <Login></Login> */}
      {/* <CreateAccount></CreateAccount> */}

      {/* ------------------ */}

      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  
  );
}

export default App;
