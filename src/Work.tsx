import React from "react";
import Action from "./Action";

type WorkProps = {
  onWork: () => void
  canWork: boolean
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
      <div>
        <h2>
          Work
        </h2>

        <p>
          Your boss wants
        </p>

        <ul>
          {props.fast && <li>fast (-2 energy)</li>}
          {props.cheap && <li>cheap</li>}
          {props.good && <li>good</li>}
        </ul>

        <p>You will get paid ${props.pay}.</p>

        <Action
          onClick={handleButtonClick}
          label="Do Work"
          info="-energy"
          disabled={!props.canWork}
        />
      </div>
    </div>
  )
}

export default Work
