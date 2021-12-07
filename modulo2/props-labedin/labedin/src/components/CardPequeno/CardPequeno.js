import React from 'react';
// import './CardPequeno.css';
// import './components/App.css';
import styled from 'styled-components';

const SmallCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    width: 200px;
    padding: 15px 150px;
    margin: 10px auto;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
`

const ImgSmallCardContainer = styled.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
    align-self: flex-start;
`

const TitleSmallCard = styled.h4 `
    padding-right: 5px;
`
    
function CardPequeno(props) {
    return (
        <SmallCardContainer>
          <ImgSmallCardContainer src={ props.imagem } />
            <div>
                <TitleSmallCard>{ props.nome }</TitleSmallCard>
                <p>{ props.descricao }</p>
            </div>
        </SmallCardContainer>
    )
}

export default CardPequeno;