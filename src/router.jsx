import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import FavoritesPage from "./pages/FavoritesPage";
import ACharacterPage from "./pages/ACharacterPage";

/* 
  Creates browser router that we use to render different page 
  elements under App.jsx using the Outlet component, creating 
  a single-page application (SPA) while allowing us to render 
  different pages without refreshing the page
*/
const router = createBrowserRouter([
  {
    // BaseURL to render App.jsx at, then pages will be rendered from the outlet component
    path: "/",
    element: <App />,
    children: [
      {
        // Page to load at the baseURL (first element that Outlet will load)
        index: true,
        element: <HomePage />,
      },
      {
        path: "about/",
        element: <AboutPage />,
      },
      {
        path: "characters/",
        element: <CharactersPage />,
      },
      {
        /* 
          :id/ is a variable parameter that can be pulled from the URL using 
          useParams hook from react-router-dom
        */
        path: "character/:id/",
        element: <ACharacterPage />,
      },
      {
        path: "favorites/",
        element: <FavoritesPage />,
      },
    ],
    // Page to load if an error occurs and the element can not render
    errorElement: <NotFound />,
  },
]);

export default router;
