import { useLoaderData } from "react-router-dom";
import axios from "axios";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  // const searchTerm = "if you don't provide anything, it will return the default list";

  const searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <div>
      <h2> Landing</h2>
    </div>
  );
};

export default Landing;
