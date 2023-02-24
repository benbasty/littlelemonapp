import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the booking form heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve Your Table Now");
    expect(headingElement).toBeInTheDocument();
})