import React from "react";
import "./styles/ReservationsContent.css";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

function ReservationsPage() {
  const navigate = useNavigate();

  return (
    <div className="res-content-wrappers">
      <div className="res-content-container">
        <div className="form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <Form navigate={navigate} />
        </div>
      </div>
    </div>
  );
}

export default ReservationsPage;
