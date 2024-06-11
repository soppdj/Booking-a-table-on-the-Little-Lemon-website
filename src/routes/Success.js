import React from "react";
import Footer from "../components/Footer";
import HeaderElement from "../components/HeaderElement";

const Success = () => {
  return (
    <div>
      <HeaderElement />
      <div
        style={{
          padding: 16,
          marginBlock: 64,
        }}
      >
        <h1>Successfully submitted your reservation!</h1>
        <p>We look forward to seeing you at Little Lemon.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
