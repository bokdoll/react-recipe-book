import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import { Link }from "react-router-dom";
import styled from "styled-components";

export type recipeProps = {
    id: number;
    name: string;
    summary: string;
    time: string;
    level: string;
    img: string;

}

function Recipe({id, name, summary, time, level, img}: recipeProps) : JSX.Element{
    const clock_img = require('../resources/clock_img');
    const level_img = require('../resources/level_img');

    // lazy Loading
    // const lazyLoadRef : any = useRef();
    // const lazyLoadOption = { root: null, threshold: 0.4 };
    // const lazyLoadhandler = (entries : any, observer : any) => {
    // const { target } = entries[0];
    // if (entries[0].isIntersecting) {
    //     target.src = target.dataset.src;
    //     lazyLoadObserver.unobserve(target);
    // }
    // };
    // const lazyLoadObserver = new IntersectionObserver(lazyLoadhandler, lazyLoadOption);

    // useEffect(() => {
    //     lazyLoadObserver.observe(lazyLoadRef.current);
    // }, [])
    

    return (
        <Link to={{
            pathname: `/recipe/${name}`,
            state: {
                name
            }
        }}
        style={{ textDecoration: 'none' }}
        >
            <RecipeItem>
                <RecipeImg src={img} alt={name} title={name}/>
                <RecipeName>{name}</RecipeName>
                <RecipeSum>{summary}</RecipeSum>
                <RecipeAdd>
                    <AddImg src={ clock_img } alt="소요 시간" title="소요 시간"/>
                    <AddText>{time}</AddText>
                    <AddImg src={level_img} alt="난이도" title="난이도"/>
                    <AddText>{level}</AddText>
                </RecipeAdd>
            </RecipeItem>
        </Link>
    );
}

Recipe.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    level : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired
}


const RecipeItem = styled.div`
    background-color: white;
    margin-bottom: 40px;
    font-weight: 300;
    border: solid;
    border-width: 3px;
    border-color: #d1d1d1;
    color: #adaeb9;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    padding-bottom: 10px;
`

const RecipeImg = styled.img`
    position: relative;
    max-width: 335px;
    min-height: 310px;
    width: 100%;
    margin-right: 30px;
`

const RecipeName = styled.h3`
    margin: 10px;
    font-size: 28px;
    color:black;
    margin-left: 15px;
    margin-bottom: 0;
`
const RecipeAdd = styled.div`
    text-align: right;
    font-size: 20px;
    color: #c1c1c1;
    font-weight: 500;
    margin-left: 5px;
    margin-right: 20px;
`

const AddText = styled.span`
    font-size: 20px;
    color: #c1c1c1;
    font-weight: 500;
    margin-left: 5px;
    margin-right: 5px;
`

const AddImg = styled.img`
    max-width: 23px;
`

const RecipeSum = styled.h2`
    margin-left: 15px;
    margin-right: 10px;
    margin-top: 3px;
    font-size: 20px;
    color:#8a8a8a;
    font-weight: 400;
    display: flex;
`

export default  Recipe;