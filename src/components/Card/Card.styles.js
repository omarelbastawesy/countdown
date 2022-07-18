import styled from "styled-components";

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    color: var(--Grayish-blue);
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const Wraper = styled.div`
  top: 35%;
  left: 50%;
  transform-style: preserve-3d;
  perspective: 500px;
  height: 150px;
  width: 170px;
  box-shadow: 2px 10px 1px 0px #00000091;
  border-radius: 10px;

  .top {
    transform: rotateX(-1deg);
  }

  .flip {
    animation-duration: 0.5s;
    animation-name: topFlip;
    animation-timing-function: linear;
  }

  @keyframes topFlip {
    0% {
      transform: rotateX(-1deg);
    }
    25% {
      transform: rotateX(-87deg);
    }
    25.00000001% {
      transform: rotateX(93deg);
    }
    50% {
      transform: rotateX(1deg);
    }
  }

  .top .front,
  .top .back {
    background-color: var(--Dark-blue);
  }

  .bottom .front,
  .bottom .back {
    background-color: #3a3c5a;
  }

  .top,
  .bottom {
    color: var(--Soft-red);
    position: absolute;
    height: 100%;
    width: 101%;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: 0.5s;

    .front span,
    .back span {
      font-size: 7rem;
    }

    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      backface-visibility: hidden;
    }
  }
  &::after {
    content: "";
  }
`;

export const Spantopright = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--black-blue);
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -100%);
  border-top-left-radius: 100%;
  z-index: 111;
`;

export const Spantopleft = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--black-blue);
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(100%, -100%);
  border-top-right-radius: 100%;
  z-index: 111;
`;

export const Spantbottomright = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--black-blue);
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-100%, 0%);
  border-bottom-left-radius: 100%;
  z-index: 111;
`;

export const Spanbottomleft = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--black-blue);
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(100%, 0%);
  border-bottom-right-radius: 100%;
  z-index: 111;
`;

export const SpantoprightBack = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--black-blue);
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-100%, 0%);
  border-bottom-left-radius: 100%;
  z-index: 111;
`;

export const SpantopleftBack = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--black-blue);
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(100%, 0%);
  border-bottom-right-radius: 100%;
  z-index: 111;
`;

export const SpantbottomrightBack = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--black-blue);
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -100%);
  border-top-left-radius: 100%;
  z-index: 111;
`;

export const SpanbottomleftBack = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--black-blue);
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(100%, -100%);
  border-top-right-radius: 100%;
  z-index: 111;
`;
