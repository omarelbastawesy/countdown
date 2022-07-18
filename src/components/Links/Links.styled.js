import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  gap: 45px;

  path {
    transition: 0.1s;
  }

  li:hover {
    path {
      fill: var(--Soft-red);
    }
  }
`;
