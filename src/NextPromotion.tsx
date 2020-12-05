import React from "react";

type NextPromotionProps = {
  nextPromotionSkillLevel: number
}

const NextPromotion: React.FC<NextPromotionProps> = (props) => {
  return (
    <div className="NextPromotion">
      <p>You will be promoted at skill level {props.nextPromotionSkillLevel}.</p>
    </div>
  )
}

export default NextPromotion

