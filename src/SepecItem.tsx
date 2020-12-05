import React from "react";

type SpecItemProps = {
  label: string
  value: number
}

const SpecItem: React.FC<SpecItemProps> = ({ label, value }) => {
  return (
    <div className="SpecItem">
      <label>{label}</label>
      <span className="value">{value}</span>
    </div>
  )
}

export default SpecItem
