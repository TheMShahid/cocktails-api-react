import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Landing,
  About,
  HomeLayout,
  Cocktail,
  NewsLetter,
  Error,
} from "./pages/index";

import { loader as loaderLanding } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: loaderLanding,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
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
