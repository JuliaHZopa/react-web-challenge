import * as React from 'react';
import styled from 'styled-components'


interface ICircularGraphicProps {
  amountLeft: number;
  amountSent: number;
}

const CircularGraphic = ({amountSent, amountLeft}: ICircularGraphicProps) => {

  const StyledWrapper = styled.div`
    background-color: blue;
  `;

  const StyledAmountLeft = styled.div`
    background-color: green;
    width: ${amountLeft}px
  `;


  const StyledAmountSent = styled.div`
    background-color: yellow;
    width: ${amountSent}px
  `;

  return (
    <StyledWrapper>
      <StyledAmountLeft />
      <StyledAmountSent />
    </StyledWrapper>
  )
}

export default CircularGraphic;
