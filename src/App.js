import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

import { Route, Routes } from "react-router-dom";
import Success from "./routes/Success";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
