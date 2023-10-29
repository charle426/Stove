import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Homepage from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ServicesPage from "./pages/servicesPage";
import Refill from "./pages/RefillPage";
import Logistics from "./pages/logisticsPage";
import Cargo from "./pages/frieghtPage";
import ErrorPage from "./Error";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";
import Career from "./pages/Career";
export default function App() {
  const [active, setActive] = React.useState("home");

  return (
    <>
      <Loader />
      <Router>
        <Navbar activeNav={active} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage setActiveNav={setActive} />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/services"
            element={<ServicesPage setActiveNav={setActive} />}
          />
          <Route path="/refill" element={<Refill setActiveNav={setActive} />} />
          <Route
            path="/delivery"
            element={<Logistics setActiveNav={setActive} />}
          />
          <Route path="/cargo" element={<Cargo setActiveNav={setActive} />} />
          <Route
            path="/contact"
            element={<Contact setActiveNav={setActive} />}
          />
          <Route
            path="/career"
            element={<Career setActiveNav={setActive} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
library.add(fab, fas, far);
