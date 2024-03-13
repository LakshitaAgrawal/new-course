import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatHM from "../Components/WhatHM/WhatHM";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/what-is-hm"} element={<WhatHM />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
