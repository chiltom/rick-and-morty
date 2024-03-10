import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const addFavorites = (char) => {
    const updatedFavorites = [...favorites, char];
    setFavorites(updatedFavorites);
  };

  const removeFavorites = (char) => {
    const updatedFavorites = favorites.filter((c) => {
      if (c.id !== char.id) {
        return c;
      }
    });
    setFavorites(updatedFavorites);
  };

  const checkIsFavorite = (id) =>
    favorites.filter((char) => char.id === id).length > 0;

  return (
    <>
      {/* Include our navbar component here to ensure that it 
      loads on every single page that is loaded */}
      <MyNavbar />
      {/* Outlet for router to load different pages all under App.jsx */}
      <Outlet
        /* 
          Context used to pass down all of these elements to all children
          pages of App.jsx specified in router.jsx 
        */
        context={{ favorites, addFavorites, removeFavorites, checkIsFavorite }}
      />
    </>
  );
}
