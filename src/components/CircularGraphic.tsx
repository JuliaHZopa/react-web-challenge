import * as React from 'react';
import styled from 'styled-components'


interface ICircularGraphicProps {
  amountLeft: number;
  amountSent: number;
}

const CircularGraphic = ({ amountSent = 0, amountLeft }: ICircularGraphicProps) => {
  if (amountLeft === undefined) {
    return null;
  }

  const radius = 45;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * amountSent / (amountLeft + amountSent);

  const StyledWrapper = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
  `;

  const StyledCircleBackground = styled.circle`
    fill: white;
    stroke: darkgrey;
    stroke-width: 10px;
  `;

  const StyledCircleProgress = styled.circle`
    fill: none;
    stroke: darkslategrey;
    ;
    stroke-width: 10px;
  `;

  return (
    <StyledWrapper>
      <svg
        width={200}
        height={200}
        viewBox={'0 0 200 200'}>
        <StyledCircleBackground
          cx={100}
          cy={100}
          r={radius} />
        <StyledCircleProgress
          cx={100}
          cy={100}
          r={radius}
          transform={'rotate(-90 100 100)'}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}/>
      </svg>
    </StyledWrapper>
  )
}

export default CircularGraphic;
