import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';

function FavoritesRecipes(props) {
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
  }, []);
  return (
    <section>
      <h1>Favorites Recipes</h1>
      <Header { ...props } pageTitle="Favorite Recipes" />
    </section>
  );
}

export default FavoritesRecipes;
