import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Home from "./pages/Home.jsx";
import Layout from "./Components/Layout.jsx";
import Contact from "./pages/Contact.jsx";
import SingleCard from "./pages/SingleCard.jsx";
import Login from "./pages/Login.jsx";
import Protectedroute from "./Components/Protectedroute.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="*" element={<Login/>}></Route> */}
        <Route path="/" element={<Layout />}>
          <Route element={<Protectedroute />}>
            <Route index element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/products/:id" element={<SingleCard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
