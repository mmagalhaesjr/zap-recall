import styled from "styled-components";
import cards from "../cards";
import setaPlay from "../assets/seta-play.png";
import setaVirar from "../assets/seta-virar.png";

export default function Cards() {
  function mostrarPergunta() {
    return;
  }

  return cards.map((card) => (
    <StyledPerguntaAberta onClick={mostrarPergunta}>
      <p>{card.answer}</p>
      <StyledContainerBotoes>
        <button class="vermelho" onCLick>
          Não Lembrei
        </button>
        <button class="laranja" onCLick>
          Quase não lembrei
        </button>
        <button class="verde" onCLick>
          Zap
        </button>
      </StyledContainerBotoes>
    </StyledPerguntaAberta>
  ));
}

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
    color: #333333;
  }
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
