import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render Header component", () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const online = screen.getByText("About US");
  expect(online).toBeInTheDocument();
});


test("should render Login Button", () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  // const text = screen.getByText("Login"); Not a good way to find this way
  const loginButton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(loginButton);
  const logoutbutton = screen.getByRole("button", {name: "Logout"});
  
  expect(logoutbutton).toBeInTheDocument();
});

test("should render text Cart - 0 text", () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  // const text = screen.getByText("Login"); Not a good way to find this way
  const text = screen.getByText("Cart - 0");
  expect(text).toBeInTheDocument();
});

test("should render text Cart regex", () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const text = screen.getByText(/Cart/);
  expect(text).toBeInTheDocument();
});
