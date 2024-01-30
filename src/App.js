import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantDetails from "./components/ResturantDetails";
const About = lazy(() => import("./components/About"));

const Applayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId",
        element: <ResturantDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//Rendering JSX and also different types of rendering functional components
// const Title = <h1 className="heading">Title JSX</h1>;
// const HeadingComponent = () => <h1>Welcome Vishwas!</h1>;

// const MainComponent = () => {
//   return (
//     <div id="container">
//         {Title}
//         {/* <TitleComponent /> */}
//         {HeadingComponent()}
//         <HeadingComponent />
//         <HeadingComponent></HeadingComponent>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MainComponent />);

//Component Composition
// const TitleComponent = () => <h1 className="heading">Title bro</h1>;
// const HeadingComponent = () => <h1>Welcome Vishwas!</h1>;

// const MainComponent = () => {
//   return (
//     <div id="container">
//         <TitleComponent />
//         <HeadingComponent />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MainComponent />);

// React.createElement => Creates a object and while rendering converts to HTML

//Creating html element using core react
// const heading = React.createElement("h1", { id: "heading" }, "Namaste Vish");
// //Creating HTML element using jsx
// const jsxheading = (
//   <h1 className="heading" tabIndex="5">
//     Namaste Vish!!
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);

// const parent = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "child" },
//         [React.createElement("h1", { id: "header1" }, "Hello World"),
//         React.createElement("h1", { id: "header2" }, "Hello World2")]),

//     React.createElement("div", { id: "child2" },
//         [React.createElement("h1", { id: "header3" }, "Hello World3"),
//         React.createElement("h1", { id: "header4" }, "Hello World4")])
//     ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
