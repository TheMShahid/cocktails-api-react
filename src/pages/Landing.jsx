import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CockailsList from "../components/CocktailsList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  // const searchTerm = "if you don't provide anything, it will return the default list";

  const searchTerm = "s";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      <CockailsList drinks={drinks} />
    </>
  );
};

export default Landing;
