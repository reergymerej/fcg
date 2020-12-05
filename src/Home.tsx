import React from "react";

type HomeProps = {
  onEndDay: () => void
}

const Home: React.FC<HomeProps> = (props) => {
  const handleButtonClick = () => {
    props.onEndDay()
  }

  return (
    <div className="Home">
      <p>
        You are at home.
      </p>

      <button onClick={handleButtonClick}>
        End Day
      </button>
    </div>
  )
}

export default Home
