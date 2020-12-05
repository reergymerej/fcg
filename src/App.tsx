import React from 'react';
import './App.css'
import Energy from './Energy';
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
    skill: 3,
    pay: 0.95,
    cheap: true,
    good: true,
  },
  {
    skill: 5.5,
    pay: 1.30,
    fast: true,
    good: true,
  },
  {
    skill: 12,
    pay: 1.25,
    good: true,
  },
]

const DAILY_ENERGY = 3

const fixFloat = (x: number): number => {
  return Math.round(x * 100) / 100
}

const getDaysUntilBillsDue = (day: number): number => {
  return 6 - day % 7
}


const App = () => {
  const [day, setDay] = React.useState(1)
  const [jobIndex, setJobIndex] = React.useState(0)
  const [money, setMoney] = React.useState(0)
  const [skill, setSkill] = React.useState(0)
  const [fatigue, setFatigue] = React.useState(0)
  const [energy, setEnergy] = React.useState(DAILY_ENERGY)
  const BILLS_PER_DAY = 0.2
  const [bills, setBills] = React.useState(BILLS_PER_DAY)
  const [atWork, setAtWork] = React.useState(true)
  const [studyMaterials, setStudyMaterials] = React.useState(0)

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

  const fatigueChange = fast ? 2 : 1

  const doWork = () => {
    const skillChange = good ? 1 : 0.2
    setSkill(skill + skillChange)

    const moneyChange = pay
    setMoney(money + moneyChange)

    setFatigue(fatigue + fatigueChange)
    setEnergy(energy - fatigueChange)

    setAtWork(false)
  }

  const handleBills = () => {
    setBills(bills + BILLS_PER_DAY)
    if (getDaysUntilBillsDue(day) === 0) {
      console.log('paying bills')
      setMoney(money - bills)
    }
  }

  const endDay = () => {
    setFatigue(0)
    setEnergy(DAILY_ENERGY)
    setAtWork(true)
    setDay(day + 1)
    handleBills()
  }

  const buyClass = () => {
    setFatigue(fatigue + 1)
    setEnergy(energy - 1)
    setMoney(money - 1)
    setStudyMaterials(studyMaterials + 1)
  }

  const study = () => {
    setFatigue(fatigue + 1)
    setEnergy(energy - 1)
    setStudyMaterials(studyMaterials - 0.25)
  }

  if (nextPromotionSkillLevel) {
    maybePromote(skill, nextPromotionSkillLevel)
  }

  const studyMaterialCost = 1

  const gameOver = money < 0

  return (
    <div className="App">
      <Energy
        percent={(DAILY_ENERGY - energy + 1) / DAILY_ENERGY}
      />

      <Specs
        money={fixFloat(money)}
        skill={fixFloat(skill)}
        studyMaterials={studyMaterials}
        bills={fixFloat(bills)}
        billsDueInDays={fixFloat(getDaysUntilBillsDue(day))}
      />

      {gameOver &&
        <div>
          You went broke.
        </div>
      }

      {!gameOver &&
        <div className="Stage">
          <Work
            onWork={doWork}
            cheap={cheap}
            good={good}
            fast={fast}
            pay={pay}
            canWork={energy > fatigueChange}
          />
          <Home
            onEndDay={endDay}
            onBuy={buyClass}
            onStudy={study}
            canStudy={studyMaterials > 0 && energy > 0}
            canBuy={money >= studyMaterialCost && energy > 0}
          />
        </div>
      }

      {!gameOver && nextPromotionSkillLevel &&
      <NextPromotion
        nextPromotionSkillLevel={nextPromotionSkillLevel}
      />
      }

    </div>
  );
}

export default App;
