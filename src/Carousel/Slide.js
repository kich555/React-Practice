import React from 'react';
import styled from 'styled-components';

export default function Slide({ img }) {
  return (
    <ImgBox>
      <IMG src={img} />
    </ImgBox>
  );
}
const IMG = styled.img`
  width: 80vw;
  height: 40vh;
  border-radius: 10px;
`;

const ImgBox = styled.div`
  margin: 10px;
`;
