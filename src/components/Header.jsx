import React, {useState, useContext, useRef} from 'react';
import styled from 'styled-components';
import { RecipeContext } from "../routes/Home.js";
import useFetch from '../hooks/useFetch.js';

const Header = () => {
    console.log("Header");


    const [searchItem, setSearchItem] = useState("");
    const {recipeList} = useContext(RecipeContext);


    const searchInput = useRef();

    const api_url = "http://211.237.50.150:7080";
    const api_key = "56b7e9a28974c90636a027db4dd88f31f32dabf447f99b9603ea276c5d29a11c";
    const service_url = "Grid_20150827000000000226_1";
    const url = `${api_url}/openapi/${api_key}/json/${service_url}/1/100`;

    const  onChange = (e) => {
        setSearchItem(e.target.value)
    }
    const onRest = () => {
        setSearchItem("");
        searchInput.current.focus(); //focus api 사용
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