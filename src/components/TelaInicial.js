import React ,{ useState } from "react";
import styled from "styled-components";
import Logo from "./Logo"
import Deck from "./Deck"
import Rodape from "./Rodape";







export default function TelaInicial() {

   
 
return(
    <StyledTelaInicial className="screen-container" >

            <Logo/>
            <Deck/>
            <Rodape/>

    </StyledTelaInicial>
    );


}

const StyledTelaInicial = styled.div`

    background-color: #FB6B6B;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
    

`;
