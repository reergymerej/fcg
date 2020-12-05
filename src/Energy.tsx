import React from "react";

type EnergyProps = {
  percent: number
}

const getLabel = (value: number): string => {
  switch (value) {
    case 33:
      return '8:00 AM'
    case 67:
      return '4:00 PM'
    default:
      return '12:00 AM'
  }
}

const Energy: React.FC<EnergyProps> = (props) => {
  const value = Math.round(props.percent * 100)
  return (
    <div className="Energy">
      <div
        className="fill"
        style={{
          width: `${value}%`,
        }}
      />
      <label>{getLabel(value)}</label>
    </div>
  )
}

export default Energy
