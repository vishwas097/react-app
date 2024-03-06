import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resItems.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA),
//   })
// );
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
  
  it("Should Search Res List for burger text input ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

  const searchBtn = screen.getByRole("button", {name : "Search"});
 
  const searchInput = screen.getByTestId("searchInp");
  fireEvent.change(searchInput, { target: { value: "kfc" } });
  fireEvent.click(searchBtn);
  const resCards = screen.getAllByTestId("resCard");
//   expect(searchBtn).toBeInTheDocument();
        
});
