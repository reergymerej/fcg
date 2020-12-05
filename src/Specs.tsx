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

type SpecsProps = {
  fatigue: number
  money: number
  skill: number
}

const Specs: React.FC<SpecsProps> = (props) => {
  return (
    <div className="Specs">
      <SpecItem
        label="fatigue"
        value={props.fatigue}
      />
      <SpecItem
        label="$"
        value={props.money}
      />
      <SpecItem
        label="skill"
        value={props.skill}
      />
    </div>
  )
};

export default Specs;
