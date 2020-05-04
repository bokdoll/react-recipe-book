import React from "react"
import PropTypes from "prop-types"

function Recipe({id, name, summary, level, img}){
    return (
        <div className="recipe">
            <img src={img} alt={name} title={name}/>
            <h3 className="recipe_name">{name}</h3>
            <h2 className="recipe_summary">{summary}</h2>
            <h1 className="recipe_level">{level}</h1>
        </div>
    );
}

Recipe.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    level : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired
}

export default  Recipe;