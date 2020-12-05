import React from "react";
import SpecItem from "./SepecItem";


type SpecsProps = {
  money: number
  skill: number
  studyMaterials: number
  bills: number
  billsDueInDays: number
}

const Specs: React.FC<SpecsProps> = (props) => {
  return (
    <div className="Specs">
      <SpecItem
        label="$"
        value={props.money}
      />
      <SpecItem
        label="bills"
        value={props.bills}
      />
      <SpecItem
        label="days until bills due"
        value={props.billsDueInDays}
      />
      <SpecItem
        label="skill"
        value={props.skill}
      />
      <SpecItem
        label="study materials"
        value={props.studyMaterials}
      />
    </div>
  )
};

export default Specs;
