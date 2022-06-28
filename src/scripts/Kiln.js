export const firePottery = (pot, temperature) => {
    pot.fired = true
    if (temperature > 2200) {
        pot.cracked = true
    }
    else {
        pot.cracked = false
    }
    return pot
}