import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';

function ExploreRecipesIngredients(props) {
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
  }, []);
  return (
    <section>
      <h1>Explore Ingredients</h1>
      <Header { ...props } pageTitle="Explore Ingredients" />
    </section>
  );
}

export default ExploreRecipesIngredients;
