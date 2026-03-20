import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Signup from "./Components/Signup.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./Components/Layout.jsx";
import Contact from "./pages/Contact.jsx";
import SingleCard from "./pages/SingleCard.jsx";
import Login from "./pages/Login.jsx";
import Protectedroute from "./Components/Protectedroute.jsx";
import Addproduct from "./pages/Addproduct.jsx";
import Updateproduct from "./pages/Updateproduct.jsx";
import { ToastContainer } from "react-toastify";
import Login2 from "./Components/Login2.jsx";
import Usersign from "./pages/Usersign.jsx";

const App = () => {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
         
        <Route path="/login2" element={<Login2/>}></Route>
        <Route path="*" element={<Login/>}></Route>
        <Route
          path="/"
          element={
            <Protectedroute>
              <Layout />
            </Protectedroute>
          }
        >
           <Route path="/signup" element={<Usersign/>}></Route>
          <Route path="/addproduct" element={<Addproduct />}></Route>
          <Route path="/updateproduct/:id" element={<Updateproduct />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products/:id" element={<SingleCard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
