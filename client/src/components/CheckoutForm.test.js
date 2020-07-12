import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);

    fireEvent.change(firstNameInput, { target:{ value: 'Khalil'} })
    fireEvent.change(lastNameInput, { target:{ value: 'Foulks'} })
    fireEvent.change(addressInput, { target:{ value: '999 fake street'} })
    fireEvent.change(cityInput, { target:{ value: 'Philadelphia'} })
    fireEvent.change(stateInput, { target:{ value: 'Pennsylvania'} })
    fireEvent.change(zipInput, { target:{ value: 99999} })

    const submitButton = screen.getByRole(/button/i, /checkout/i)
    fireEvent.click(submitButton);

    const newPurchase = screen.getByTestId(/successmessage/i);
    expect(newPurchase).toBeInTheDocument
});