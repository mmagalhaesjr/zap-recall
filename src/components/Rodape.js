import styled from "styled-components"

export default function Rodape(){
    return(
        <StyledFooter>
            <p>boladao</p>
        </StyledFooter>
    )
}
const StyledFooter = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

  h1{
    margin:10px;
  }
`