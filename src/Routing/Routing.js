import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatHM from "../Components/WhatHM/WhatHM";
import OurFeatures from "../Components/OurFeatures/OurFeatures";
import Certificate from "../Components/Certificate/Certificate";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/what-is-hm"} element={<WhatHM />}></Route>
        <Route exact path={"/our-features"} element={<OurFeatures />}></Route>
        <Route exact path={"/certificate"} element={<Certificate />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
