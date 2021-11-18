export interface IBooleanFunctions {
  random: (percentage?: number) => boolean
}

const DEFAULT_RANDOM_CHANCE = 50

export const booleanFunctions: IBooleanFunctions = {
  /**
   * Véletlenszerűen generál igazat vagy hamisat.
   * @param {number} [percentage=50] Hány százalékban generáljon igazat?
   * @returns {boolean} A generált igaz/hamis.
   */
  random(percentage = DEFAULT_RANDOM_CHANCE): boolean {
    return utils.number.random(0, 99) < percentage
  }
}
