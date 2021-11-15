import React from 'react';
//import './CardPequeno.css';
//import './components/App.css';
import styled from `styled-components`;

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
          <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;