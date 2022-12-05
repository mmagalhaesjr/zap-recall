import React, { useState } from "react";
import styled from "styled-components";
import lista from "./Lista"
import setaVirar from "../assets/img/seta_virar.png";
import setaPlay from "../assets/img/seta_play.png";
import icone_certo from "../assets/img/icone_certo.png";
import icone_erro from "../assets/img/icone_erro.png";
import icone_quase from "../assets/img/icone_quase.png";

export default function Deck({ respondidas, setRespondidas }) {
  const [abertas, setAbertas] = useState([])
  const [viradas, setViradas] = useState([])
  const [zap, setZap] = useState([])
  const [parcial, setParcial] = useState([])
  const [incorreto, setInorreto] = useState([])

  return lista.map((card) => respondidas.includes(card) || !(abertas.includes(card.question)) ? <CardFechado card={card}  /> : <CardAberto card={card} />)

  function CardFechado({ card }) {
    return (
      <StyledPerguntaFechada respondidas={respondidas.includes(card)} cor={definirCor(card)}>
        <p data-test="flashcard-text">Pergunta {lista.indexOf(card) + 1}</p>
        
        {respondidas.includes(card) 
        ? definirIcone(card) 
        : <img data-test="play-btn" onClick={() => (setAbertas([...abertas, card.question]))} src={setaPlay} alt="" /> }
        
      </StyledPerguntaFechada>
    )

    function definirCor(card) {
      if (zap.includes(card)) {
        return "#2fbe34";
      } else if (parcial.includes(card)) {
        return "#ff922e"
      } else if (incorreto.includes(card)) {
        return "#ff3030"
      } else {
        return "#333333"
      }
    }

    function definirIcone(card) {
      if (zap.includes(card)) {
        return <img data-test="zap-icon" onClick={() => (setAbertas([...abertas, card.question]))} src={icone_certo} alt="" />
      } else if (parcial.includes(card)) {
        return <img data-test="partial-icon" onClick={() => (setAbertas([...abertas, card.question]))} src={icone_quase} alt="" />
      } else if (incorreto.includes(card)) {
        return <img data-test="no-icon" onClick={() => (setAbertas([...abertas, card.question]))} src={icone_erro} alt="" />
      }
    }
  }

  function CardAberto({ card }) {

    if (!(viradas.includes(card.answer))) {
      return (
        <StyledPerguntaAberta >
          <p data-test="flashcard-text">{card.question}</p>
          <img data-test="turn-btn" onClick={() => setViradas([...viradas, card.answer])} src={setaVirar} alt="virar carta" />
        </StyledPerguntaAberta>
      )
    } else {
      return (
        <StyledPerguntaAberta>

          <p data-test="flashcard-text">{card.answer}</p>

          <StyledContainerBotoes>
            <button className="vermelho" data-test="no-btn" onClick={(e) => (setRespondidas([...respondidas, card]), setInorreto([...incorreto, card]))}>
              Não Lembrei
            </button>

            <button className="laranja" data-test="partial-btn" onClick={(e) => (setRespondidas([...respondidas, card]), setParcial([...parcial, card]))} >
              Quase não lembrei
            </button>

            <button className="verde" data-test="zap-btn" onClick={(e) => (setRespondidas([...respondidas, card]), setZap([...zap, card]))} >
              Zap
            </button>
          </StyledContainerBotoes>

        </StyledPerguntaAberta>
      )
    }
  }
}

const StyledPerguntaFechada = styled.div`
width: 300px;
height: 35px;
background-color: #ffffff;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;

p {
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.cor};
  text-decoration: ${props => props.respondidas ? 'line-through' : 'none'} ;
}
img {
  bottom: 10px;
  right: 10px;
}
`;



const StyledPerguntaAberta = styled.div`
   width: 300px;
   margin: 12px;
   padding: 15px;
   min-height: 100px;
   background: #ffffd5;
   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
   border-radius: 5px;
   font-family: "Recursive";
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #333333;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   img {
     position: absolute;
     bottom: 10px;
     right: 10px;
   }
`;

const StyledContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

  button {
    width: 75px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: blue;
    border-radius: 5px;
    padding: 5px;
  }
  .vermelho {
    background: #ff3030;
  }
  .laranja {
    background: #ff922e;
  }
  .verde {
    background: #2fbe34;
  }
`;
