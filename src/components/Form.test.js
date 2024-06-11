import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form", () => {
  test("Renders labels and fields", () => {
    render(<Form />);
    // Date label and field
    const fullName = screen.getByText("Full Name");
    expect(fullName).toBeInTheDocument();
    const emailField = screen.getByText("Email");
    expect(emailField).toBeInTheDocument();

    const phoneNumberField = screen.getByText("PhoneNumber");
    expect(phoneNumberField).toBeInTheDocument();
    const occasionTimeField = screen.getByText("Occasion (optional)");
    expect(occasionTimeField).toBeInTheDocument();

    const numberGuestLabel = screen.getByText("Guests");
    expect(numberGuestLabel).toBeInTheDocument();

    const dateField = screen.getByText("Date & Time");
    expect(dateField).toBeInTheDocument();

    const submitButton = screen.getByText("Reserve");
    expect(submitButton).toBeInTheDocument();
  });
});
