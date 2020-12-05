import React from 'react';
import './App.css'
import Home from './Home';
import NextPromotion from './NextPromotion';
import Specs from './Specs'
import Work from './Work';

type Job = {
  pay: number
  fast?: boolean
  cheap?: boolean
  good?: boolean
  skill: number
}

const jobs: Job[] = [
  {
    skill: 0,
    pay: 0.25,
    cheap: true,
  },
  {
    skill: 1,
    pay: 0.50,
    cheap: true,
    fast: true,
  },
  {
    skill: 6,
    pay: 0.75,
    cheap: true,
    good: true,
  },
  {
    skill: 9,
    pay: 1.00,
    fast: true,
    good: true,
  },
  {
    skill: 12,
    pay: 1.25,
    good: true,
  },
]

const App = () => {
  const [jobIndex, setJobIndex] = React.useState(0)
  const [money, setMoney] = React.useState(0)
  const [skill, setSkill] = React.useState(0)
  const [fatigue, setFatigue] = React.useState(0)
  const [atWork, setAtWork] = React.useState(true)

  const job = jobs[jobIndex]
  const { pay, good, fast, cheap} = job

  const nextPromotionSkillLevel = jobs[jobIndex + 1]
    && jobs[jobIndex + 1].skill

  const maybePromote = (skill: number, nextPromotionSkillLevel: number) => {
    if (skill >= nextPromotionSkillLevel) {
      setJobIndex(jobIndex + 1)
      console.log('You have been promoted.')
    }
  }

  const doWork = () => {
    const skillChange = good ? 1 : 0.2
    setSkill(skill + skillChange)

    const moneyChange = pay
    setMoney(money + moneyChange)

    const fatigueChange = fast ? 2 : 1
    setFatigue(fatigue + fatigueChange)

    setAtWork(false)
  }

  const endDay = () => {
    setFatigue(0)
    setAtWork(true)
  }

  if (nextPromotionSkillLevel) {
    maybePromote(skill, nextPromotionSkillLevel)
  }

  return (
    <div className="App">
      <Specs
        money={money}
        skill={skill}
        fatigue={fatigue}
      />

      {atWork
        ?  (
          <Work
            onWork={doWork}
            cheap={cheap}
            good={good}
            fast={fast}
            pay={pay}
          />
        )
        : (
          <Home
            onEndDay={endDay}
          />
        )
      }

      {nextPromotionSkillLevel &&
      <NextPromotion
        nextPromotionSkillLevel={nextPromotionSkillLevel}
      />
      }

    </div>
  );
}

export default App;
