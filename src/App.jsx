import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Landing,
  About,
  HomeLayout,
  Cocktail,
  NewsLetter,
  Error,
  SinglePageError,
} from "./pages/index";

import { loader as loaderLanding } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/NewsLetter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: loaderLanding,
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            element: <h1>about company</h1>,
          },
          {
            path: "person",
            element: <h1>person</h1>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
