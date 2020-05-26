import React, { useContext} from "react";
import Recipe from "./Recipe.jsx";
import styled from "styled-components";
import { RecipeContext } from "../routes/Home.js";


const RecipeList = () => {
    console.log("RecipeList");
    const {isLoading, recipeList} = useContext(RecipeContext);

    return (
                <>
                    <Container>
                            {
                                isLoading ?
                                (<Loader><LoadingText> 👀 </LoadingText></Loader>) :
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