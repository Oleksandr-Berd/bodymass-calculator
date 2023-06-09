import styled from "styled-components"

export const Container = styled.div`
  padding-top: ${(props) => props.theme.space[17]};
  padding-bottom: 96px;
  padding-left: ${(props) => props.theme.space[5]};
  padding-right: 29px;

  text-align: center;

  background-color: ${(props) => props.theme.color.background};

  @media (min-width: 768px) {
    padding-left: ${(props) => props.theme.space[19]};
    padding-right: 43px;
  }

  @media (min-width: 1440px) {
    padding-left: 140px;
    padding-right: 140px;

    background-color: ${(props) => props.theme.color.white};
  }
`;

export const List = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    column-gap: 15px;
    row-gap: 24px;
  }

  @media (min-width: 1440px){
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    gap: ${props => props.theme.space[8]}
  }
`;