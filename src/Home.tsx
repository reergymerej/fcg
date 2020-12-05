import React from "react";
import Action from "./Action";

type HomeProps = {
  onEndDay: () => void
  onBuy: () => void
  onStudy: () => void
  canStudy: boolean
  canBuy: boolean
}

const Home: React.FC<HomeProps> = (props) => {
  const handleEnd = () => {
    props.onEndDay()
  }

  const handleBuy = () => {
    props.onBuy()
  }

  const handleStudy = () => {
    props.onStudy()
  }

  return (
    <div className="Home">
      <div>
        <h2>
          Home
        </h2>

        <Action
          label="Buy Study Materials"
          onClick={handleBuy}
          info="-energy, -money"
          disabled={!props.canBuy}
        />

        <Action
          label="Study"
          onClick={handleStudy}
          info="-study material, -energy, +skill"
          disabled={!props.canStudy}
        />

        <Action
          label="End Day"
          onClick={handleEnd}
          info="resets energy, pays bills"
        />
      </div>
    </div>
  )
}

export default Home
