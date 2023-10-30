
import styled from "styled-components";

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {

 
  const arr = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
    
    };



  return (

    <div className="flex flex-col justify-center items-center sm:flex-row">
   <p className="font-semibold leading-6">Select Number</p><br></br>
    {arr.map((value, i) => (
      <Box
        isSelected={value === selectedNumber}
        key={i}
        onClick={() => numberSelectorHandler(value)}
      >
        {value}
      </Box>
    ))} 
    
    <p className="font-semibold leading-6 text-red-800">{error}</p>
    </div>
  

    


  )
}

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  margin:10px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

