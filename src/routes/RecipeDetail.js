import React from "react";

class RecipeDetail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }

    render(){
        const {location} = this.props;
        console.log("RecipeDetail");
        if (location.state){
            return <span>{location.state.name}</span>;
        }else{
            return null;
        }
    }
}

export default RecipeDetail;