import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatHM from "../Components/WhatHM/WhatHM";
import OurFeatures from "../Components/OurFeatures/OurFeatures";
import Certificate from "../Components/Certificate/Certificate";
import Testimonial from "../Components/Testimonial/Testimonial";
import Footer from "../Components/Footer/Footer";
import ProfilEdit from "../Components/ProfileEdit/ProfilEdit";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/what-is-hm"} element={<WhatHM />}></Route>
        <Route exact path={"/our-features"} element={<OurFeatures />}></Route>
        <Route exact path={"/certificate"} element={<Certificate />}></Route>
        <Route exact path={"/testimonial"} element={<Testimonial />}></Route>
        <Route exact path={"/footer"} element={<Footer />}></Route>
        <Route exact path={"/profile-edit"} element={<ProfilEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
