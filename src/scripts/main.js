// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";

// Make 5 pieces of pottery at the wheel

let mug = makePottery("mug", 30, 20)
let bowl = makePottery("bowl", 40, 15)
let vase = makePottery("vase", 70, 50)
let plate = makePottery("plate", 45, 5)
let jug = makePottery("jug", 60, 35)


// Fire each piece of pottery in the kiln
let finishedMug = firePottery(mug, 2100)
let finishedBowl = firePottery(bowl, 2300)
let finishedVase = firePottery(vase, 2100)
let finishedPlate = firePottery(plate, 2100)
let finishedJug = firePottery(jug, 2300)



console.log(finishedMug)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



