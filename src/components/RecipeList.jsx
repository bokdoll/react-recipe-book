import React, { useContext, useState, useEffect} from "react";
import Recipe from "./Recipe";
import styled from "styled-components";
//import { RecipeContext } from "../routes/Home";
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetch from "../hooks/useFetch";
import Axios from "axios";
import { RecipeContext } from "../routes/Home";


const RecipeList = ()=> {
    console.log("RecipeList");

    const api_url = "http://211.237.50.150:7080";
    const api_key = "56b7e9a28974c90636a027db4dd88f31f32dabf447f99b9603ea276c5d29a11c";
    const service_url = "Grid_20150827000000000226_1";

    const [isLoading, setIsLoading] = useState(true);
    const [recipeList, setRecipeList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [items, setItems] = useState(20);
    const [hasMore, setHasMore] = useState(true);
    const [url, setUrl] = useState(`${api_url}/openapi/${api_key}/json/${service_url}/1/16`);

    const fetchData = async () => {
        Axios.get(url).then(res => {
            setRecipeList(recipeList.concat(res.data.Grid_20150827000000000226_1.row));
            setIsLoading(false);
            setPageNumber(pageNumber + 1);
            setUrl(`${api_url}/openapi/${api_key}/json/${service_url}/${items*(pageNumber)}/${items*(pageNumber+1)}`);
            if (pageNumber == 10){
                setHasMore(false);
            }
        });
    }

    useEffect(() =>{
        fetchData()
    }, []);

    return (
                <>
                    <Container>
                            {
                                isLoading && recipeList && hasMore ?
                                (<Loader><LoadingText> 👀 </LoadingText></Loader>) :
                                    (
                                        <InfiniteScroll
                                            dataLength = {recipeList.length}
                                            next={fetchData()}
                                            hasMore = {hasMore}
                                            loader = {<span>🏄‍♂️</span>}>
                                            <Recipes>
                                            {
                                                recipeList.map(recipe =>(
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
                                        </InfiniteScroll>
                                    )
                            }
                        </Container>
                    </>
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
    width: 75%;
    padding-top: 50px;
`

export default RecipeList;