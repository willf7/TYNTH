import { useEffect } from "react";
import { useState } from "react";
import { Centralizer } from "./GetAPI.style";
import { StylizedIcon } from "./GetAPI.style";
import { IconDiv } from "./GetAPI.style";

export default function GetAPI() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slip, setSlip] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setSlip(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleReload = () => {
    setIsLoaded(false);
    setError(null);

    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSlip(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  if (error) {
    return (
      <Centralizer>
        <h2>Algo deu errado : {error.message}</h2>
      </Centralizer>
    );
  } else if (!isLoaded) {
    return (
      <Centralizer>
        <h2>Está carregando!</h2>
      </Centralizer>
    );
  } else {
    return (
      <Centralizer>
        <h2>{slip.slip.advice}</h2>
        <button onClick={handleReload}>
          <IconDiv>
            <StylizedIcon />
          </IconDiv>
        </button>
      </Centralizer>
    );
  }
}
