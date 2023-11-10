import { styled } from "styled-components";
import { AiOutlineReload } from "react-icons/ai";

export const Centralizer = styled.main`
  margin-top: 35vh;
  text-align: center;
  button {
    border-radius: 5px;
    padding: 3px;
    margin-top: 2rem;
    background-color: #fff;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    height: 1.5rem;
    width: 8rem;
  }
`;

export const StylizedIcon = styled(AiOutlineReload)`
  color: #000;
  font-size: 1.175rem;
`;

export const IconDiv = styled.div`
  text-align: center;
`;
