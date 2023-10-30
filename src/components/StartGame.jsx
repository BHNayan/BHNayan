

const Startgame = ({toggle}) => {

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center overflow-hidden">
      <div className="flex justify-center items-center">
        <img src="./images/dices.png" />
      </div>

      <div className="flex flex-col justify-end items-end gap-4">
        <h1 className="font-bold text-[50px] sm:text-[80px] whitespace-nowrap">
          DICE GAME
        </h1>
        <button className="bg-black border-white text-white w-40 p-2 text-center"
        onClick={toggle}
        >
          Play Now
        </button>
      </div>
    </div>
  );
}

export default Startgame