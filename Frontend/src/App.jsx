import { Navigate, Route, Router, Routes } from "react-router-dom";
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
import Notfound from "./Components/Notfound.jsx";
import Singleproducts from "./pages/Singleproducts.jsx";

const App = () => {
  const user = localStorage.getItem('user')
  return (
    <>
      <ToastContainer />
      <Routes>
          <Route path="/login" element={!user ? <Usersign /> : <Navigate to='/'/>}></Route>
          <Route path="/signup" element={<Usersign />}></Route>
        <Route
          path="/"
          element={
            <Protectedroute>
              <Layout />
            </Protectedroute>
          }
        >
          <Route index element={<Home />}></Route>
          <Route path="singleproduct" element={<Singleproducts/>}></Route>
          <Route path="addproduct" element={<Addproduct />}></Route>
          <Route path="updateproduct/:id" element={<Updateproduct />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="products/:id" element={<SingleCard />} />
          <Route path="*" element={<Notfound />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
