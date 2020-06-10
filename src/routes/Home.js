import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import Header from '../components/Header';
import useFetch from "../hooks/useFetch";

export const RecipeContext = React.createContext();    // 상위의 스토어 역할

const Home = ()=> {
    const [recipeList, setRecipeList] = useState([]);
    console.log("Home");

    const api_url = "http://211.237.50.150:7080";
    const api_key = "56b7e9a28974c90636a027db4dd88f31f32dabf447f99b9603ea276c5d29a11c";
    const service_url = "Grid_20150827000000000226_1";
    const url = `${api_url}/openapi/${api_key}/json/${service_url}/1/576`;

    const isLoading = useFetch(setRecipeList, url);

    return (
        <RecipeContext.Provider value = {{isLoading, recipeList}}>
            <Header />
            <RecipeList />
        </RecipeContext.Provider>
    );
}

export default Home;