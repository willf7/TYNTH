import { useEffect } from "react";
import { useState } from "react";

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
    return <div>Algo deu errado : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Está carregnando!</div>;
  } else {
    return (
      <>
        <div>{slip.slip.advice}</div>
        <button onClick={handleReload}></button>
      </>
    );
  }
}
