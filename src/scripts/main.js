// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery} from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel

let mug = makePottery("Mug", 4, 20)
let bowl = makePottery("Bowl", 5, 15)
let vase = makePottery("Vase", 8, 50)
let plate = makePottery("Plate", 6, 5)
let jug = makePottery("Jug", 9, 35)

console.log(mug)

// Fire each piece of pottery in the kiln
let finishedMug = firePottery(mug, 2100)
let finishedBowl = firePottery(bowl, 2300)
let finishedVase = firePottery(vase, 2100)
let finishedPlate = firePottery(plate, 2100)
let finishedJug = firePottery(jug, 2300)

console.log(finishedMug)

// Determine which ones should be sold, and their price
let pricedMug = toSellOrNotToSell(finishedMug)
let pricedBowl = toSellOrNotToSell(finishedBowl)
let pricedVase = toSellOrNotToSell(finishedVase)
let pricedPlate = toSellOrNotToSell(finishedPlate)
let pricedJug = toSellOrNotToSell(finishedJug)

console.log(pricedMug)

let potteryCatalog = usePottery()
console.log(potteryCatalog)

// Invoke the component function that renders the HTML list
let html = document.querySelector(".potteryList")

html.innerHTML = potteryList(potteryCatalog)
