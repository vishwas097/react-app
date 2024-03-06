import { render, screen } from "@testing-library/react";
import ResturantCard, { withPromotedResturant } from "../ResturantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render Resturant Card component with Label", () => {

    //Passing the props by creating MOCK DATA
  render(<ResturantCard resData={MOCK_DATA} />);

  const text = screen.getByText("Wow! Momo");

  expect(text).toBeInTheDocument();
});

it("Should render Resturant Card With Promoted component with Label", () => {

    //Rendering and testing higher order components 
  const ResturantCardPromoted = withPromotedResturant(ResturantCard);
  render(<ResturantCardPromoted resData={MOCK_DATA} />);

  const text = screen.getByText("Wow! Momo");

  expect(text).toBeInTheDocument();
});




