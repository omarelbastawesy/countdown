import styled from "styled-components";

export const Wraper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${({ image }) => image}),
    linear-gradient(0deg, var(--Very-dark-blue), var(--black-blue));
  background-size: cover;
  background-position: center;

  h3 {
    font-size: 25px;
    margin: 0;
    color: white;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 500;
    letter-spacing: 5px;
  }
`;

export const Hills = styled.div`
  width: 100%;
  height: 25%;
  background: url(${({ image }) => image});
  position: relative;
  background-size: cover;
  background-position: center;
  top: 100%;
  transform: translateY(-100%);
`;

export const Svg = styled.svg``;
