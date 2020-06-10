import React, {useState, useContext, useRef} from 'react';
import styled from 'styled-components';
import { RecipeContext } from "../routes/Home";
import useFetch from '../hooks/useFetch.js';

const Header = () => {
    console.log("Header");

    const [searchItem, setSearchItem] = useState("");
    const {recipeList} = useContext(RecipeContext);


    const searchInput = useRef();

    const  onChange = (e) => {
        setSearchItem(e.target.value)
    }
    const onRest = () => {
        setSearchItem("");
        searchInput.current.focus();
    }


    return (
        <>
            <Title>Recipe Book</Title>
            <span>{recipeList.length}개의 레시피가 있습니다.</span>
            <input ref={searchInput} placeholder="요리를 검색해보세요!" value={searchItem} onChange ={onChange} />
            <button onClick={onRest}>🔍</button>
        </>
    )
}

const Title = styled.h1`
text-align: center;
margin-top: 20px;
font-size: 3rem;
color:green;
margin-bottom: 0;
`

export default Header;