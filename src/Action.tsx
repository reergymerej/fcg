import React from "react";

type ActionProps = {
  onClick: () => void
  label: string
  info: string
  disabled?: boolean
}

const Action: React.FC<ActionProps> = (props) => {
  return (
    <div className="Action">
      <button
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.label}
      </button>
      <span>
        {props.info}
      </span>
    </div>
  )
}

export default Action
