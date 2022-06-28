let potteryCatalog = []

export const toSellOrNotToSell = (pot) => {
    if (pot.cracked === false) {
        if (pot.weight >= 6) {
            pot.price = 40
        }
        else {
            pot.price = 20
        }
            potteryCatalog.push(pot)
    }
    return pot
}

export const usePottery = () => potteryCatalog.map(pots => ({...pots}))
