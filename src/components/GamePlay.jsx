import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import styled from "styled-components";

import { useState } from "react";

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [score, setScore] = useState(0);

  const [error,setError] =useState("");
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {

    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    };
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - randomNumber);
    }
    setSelectedNumber(undefined);
  };

  const resetscore=()=>{
    setScore(0);

  }

  return (
    <MainContainer>
      <div className="flex flex-col items-center p-10 sm:flex-row sm:justify-around sm:items-center">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}

        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="flex flex-col items-center p-10 sm:flex-row sm:justify-around sm:items-center">
        <button className="text-black font-semibold border-[2px] border-spacing-3 border-black py-2 px-10 hover:text-white hover:bg-black "
        onClick={resetscore}
        >
          Reset Score
        </button>
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  margin-top: 28px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
