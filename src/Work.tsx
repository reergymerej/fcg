import React from "react";

type WorkProps = {
  onWork: () => void
  fast?: boolean
  cheap?: boolean
  good?: boolean
  pay: number
}

const Work: React.FC<WorkProps> = (props) => {
  const handleButtonClick = () => {
    props.onWork()
  }
  return (
    <div className="Work">
      <p>
        You are at work.
      </p>

      <p>
        Your boss wants
      </p>

      <ul>
        {props.fast && <li>fast</li>}
        {props.cheap && <li>cheap</li>}
        {props.good && <li>good</li>}
      </ul>

      <p>You will get paid ${props.pay}.</p>

      <button onClick={handleButtonClick}>Do Work</button>
    </div>
  )
}

export default Work
