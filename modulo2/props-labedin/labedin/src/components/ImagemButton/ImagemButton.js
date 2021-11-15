import React from 'react';
//import './ImagemButton.css';
import styled from 'styled-components';

const ImgButtomContainer = styled.div `
 display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

    img {
        width: 30px;
        margin-right: 10px;
    }
    `
function ImagemButton(props) {
    return (
        <ImagemButton>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemButton>

    )
}

export default ImagemButton;