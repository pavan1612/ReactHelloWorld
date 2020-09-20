import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width:60%;
    margin: 16px auto ;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    text-align: center;
    @media(min-width:800px){
        width:590px;
    }   
`;

const Person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.delete}>Hi my name is {props.name} and I"m {props.age} years old </p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
            </StyledDiv>

    );
}
export default Person;