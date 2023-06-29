"use client"

import storage from "@/util/storage"
import Info from "@/components/info/info"
import Difference from "@/components/info/difference"

function InfoHolder() {
  const { allHeights, allWeights, allDates, allBmis } = storage("bmi")

  return (
    <div>
      <Info height={allHeights[1]} weight={allWeights[1]} date={allDates[1]} bmi={allBmis[1]} />
      <Info height={allHeights[0]} weight={allWeights[0]} date={allDates[0]} bmi={allBmis[0]} />
      <Difference height={allHeights} weight={allWeights} date={allDates} bmi={allBmis} />
    </div>
  )
}

export default InfoHolder
