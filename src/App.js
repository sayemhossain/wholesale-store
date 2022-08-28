import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import AddProducts from "./pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageProducts from "./pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import Home from "./pages/Home/Home/Home";
import Products from "./pages/Products/Products";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";
import RequireAuth from "./shared/RequireAuth/RequireAuth";
import Signin from "./shared/Signin/Signin";
import Signup from "./shared/Signup/Signup";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/purchase/:productId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route
            path="addproducts"
            element={<AddProducts></AddProducts>}
          ></Route>
          <Route
            path="manageproducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
