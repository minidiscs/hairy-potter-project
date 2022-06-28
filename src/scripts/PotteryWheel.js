let primaryKey = 0

export const makePottery = (shapeIn, weightIn, heightIn) => {
primaryKey++
const potteryObject = {
    id: primaryKey,
    shape: shapeIn,
    weight: weightIn,
    height: heightIn
}
return potteryObject
}
