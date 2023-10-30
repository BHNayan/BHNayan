import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-[100px] font-bold text-center">{score}</h1>
    <p className="text-[24px] leading-[36px] font-semibold text-center mt-1">Total score</p>
  </div>
  )
}

export default TotalScore