import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import AddProducts from "./pages/Dashboard/AddProducts/AddProducts";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import AllAdmin from "./pages/Dashboard/AllAdmin/AllAdmin";
import AllUser from "./pages/Dashboard/AllUser/AllUser";
import ContactMessage from "./pages/Dashboard/ContactMessage/ContactMessage";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageAllOrder from "./pages/Dashboard/ManageAllOrder/ManageAllOrder";
import ManageProducts from "./pages/Dashboard/ManageProducts/ManageProducts";
import ManageReviews from "./pages/Dashboard/ManageReviews/ManageReviews";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import Bkash from "./pages/Dashboard/Payment/Bkash";
import Nagad from "./pages/Dashboard/Payment/Nagad";
import PaymentWraper from "./pages/Dashboard/Payment/PaymentWraper";
import Rocket from "./pages/Dashboard/Payment/Rocket";
import PaymentManagement from "./pages/Dashboard/PaymentManagement/PaymentManagement";
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
            path="paymentwraper/:id"
            element={<PaymentWraper></PaymentWraper>}
          >
            <Route index element={<Bkash></Bkash>}></Route>
            <Route path="bkash" element={<Bkash></Bkash>}></Route>
            <Route path="nagad" element={<Nagad></Nagad>}></Route>
            <Route path="rocket" element={<Rocket></Rocket>}></Route>
          </Route>
          <Route
            path="paymentmanagement"
            element={<PaymentManagement></PaymentManagement>}
          ></Route>
          <Route
            path="addproducts"
            element={<AddProducts></AddProducts>}
          ></Route>
          <Route
            path="manageproducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
            path="manageallorder"
            element={<ManageAllOrder></ManageAllOrder>}
          ></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route
            path="managereviews"
            element={<ManageReviews></ManageReviews>}
          ></Route>
          <Route
            path="contactmessage"
            element={<ContactMessage></ContactMessage>}
          ></Route>
          <Route path="alluser" element={<AllUser></AllUser>}></Route>
          <Route path="alladmin" element={<AllAdmin></AllAdmin>}></Route>
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
