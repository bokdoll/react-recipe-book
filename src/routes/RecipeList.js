import React, {useState, useEffect} from "react";
import axios from "axios";
import Recipe from "../components/Recipe";
import styled from "styled-components";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [recipeList, setRecipeList] = useState([]);
    const [error, setError] = useState("");

    const callUrl = async() => {
        try {
            const {data : {Grid_20150827000000000226_1 : {row}}} = await axios.get(url);

            setRecipeList(row);
        } catch {
            setError("😭");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        callUrl();
    }, []);

    return {isLoading, recipeList, error};
}


const RecipeList = () => {
    const api_url = "http://211.237.50.150:7080";
    const api_key = "56b7e9a28974c90636a027db4dd88f31f32dabf447f99b9603ea276c5d29a11c";
    const service_url = "Grid_20150827000000000226_1";
    const url = `${api_url}/openapi/${api_key}/json/${service_url}/1/44`;

    const {isLoading, recipeList} = useFetch(url);

    return (
        <div>
        {/* <form>
            <input type="string"/>
            <button>찾기</button>
        </form> */}
        <Container>
                {
                    isLoading ?
                    (<Loader> <LoadingText>👀</LoadingText></Loader>) :
                        (
                            <Recipes>
                            {
                                recipeList.map( recipe =>(
                                    <Recipe key = {recipe.RECIPE_ID}
                                            id = {recipe.RECIPE_ID}
                                            img = {recipe.IMG_URL}
                                            summary = {recipe.SUMRY}
                                            name = {recipe.RECIPE_NM_KO}
                                            time = {recipe.COOKING_TIME}
                                            level = {recipe.LEVEL_NM}
                                    />
                                ))
                            }
                            </Recipes>
                        )
                }
            </Container>
    </div>
    );
}


const LoadingText = styled.span`
    font-size: 3rem;
`
const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
`

const Container = styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
`

const Recipes = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    grid-gap: 20px;
    border-width: 3px;
    border-color: #c1c1c1;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
`

export default RecipeList;