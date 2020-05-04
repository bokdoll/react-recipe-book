import React from "react";
import axios from "axios";
import Recipe from "../components/Recipe";

class List extends React.Component{
    state = {
        isLoading : true,
        recipeList : []
    }

    getList = async() => {
        const api_url = "http://211.237.50.150:7080"
        const api_key = "56b7e9a28974c90636a027db4dd88f31f32dabf447f99b9603ea276c5d29a11c"
        const service_url = "Grid_20150827000000000226_1"
        const { data : {Grid_20150827000000000226_1 : {row}}} = 
            await axios.get(`${api_url}/openapi/${api_key}/json/${service_url}/1/5`);

        this.setState({ recipeList : row , isLoading:false });
        console.log(row);
    }

    componentDidMount(){
        this.getList();
    }

    render(){
        const { isLoading, recipeList } = this.state;
        return (
            <section className="container">
                {
                    isLoading ?
                    (<div className="loader">
                        <span className="loader_text">Loading...</span>
                        </div>) :
                        (
                            <div className="recipes">
                            {
                                recipeList.map( recipe =>(
                                    <Recipe key = {recipe.RECIPE_ID}
                                            id = {recipe.RECIPE_ID}
                                            img = {recipe.IMG_URL}
                                            summary = {recipe.SUMRY}
                                            name = {recipe.RECIPE_NM_KO}
                                            level = {recipe.LEVEL_NM}
                                    />
                                ))
                            }
                            </div>
                        )
                }
            </section>
        );
    }
}

export default List;