import React from "react";
import PropTypes from "prop-types";
import "./Recipe.css";
import clock_img from "../resources/clock_img"
import level_img from "../resources/level_img"

function Recipe({id, name, summary, time, level, img}){
    return (
        <div className="recipe">
            <img className="recipe_img" src={img} alt={name} title={name}/>
            <h3 className="recipe_name">{name}</h3>
            <h2 className="recipe_summary">{summary.slice(0, 61)}</h2>
            <div className="recipe_add">
                <img src={ clock_img } alt="소요 시간" title="소요 시간"/>
                <span className="recipe_time">{time}</span>
                <img src={level_img} alt="난이도" title="난이도"/>
                <span className="recipe_level">{level}</span>
            </div>
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