const EXPECTED_VALUES_LENGTH = 5

const VALUE_INDEXES = [ 0, 1, 2, 3, 4 ] as const
type TValueIndex = typeof VALUE_INDEXES[number]

interface IInterval {
  min: number
  max: number
}

const VALUE_INTERVALS: Record<TValueIndex, IInterval> = {
	0: { min: 0, max: 59 }, // Perc
	1: { min: 0, max: 23 }, // Óra
	2: { min: 1, max: 31 }, // A hónap napja
	3: { min: 1, max: 12 }, // Hónap
	4: { min: 1, max: 7 }   // A hét napja
}

interface ICronMethods {
  test: (n: number) => boolean
}

export default class Cron implements ICronMethods {
  private value: string

  private minutes: ReadonlyArray<number> = []

  private hours: ReadonlyArray<number> = []

  private dates: ReadonlyArray<number> = []

  private months: ReadonlyArray<number> = []

  private days: ReadonlyArray<number> = []

  public constructor (value: string) {
  	this. value = value

  	// Hossz ellenőrzés
  	this. validateLenght()

  	// Értékek beállítása
  	this. setValues()
  }

  public test (n: number): boolean {
  	const date = new Date(n)

  	return (
  		this. minutes.includes(date.getMinutes()) &&
      this. hours.includes(date.getHours()) &&
      this. dates.includes(date.getDate()) &&
      this. months.includes(date.getMonth()) &&
      this. days.includes(date.getDay())
  	)
  }

  private validateLenght (): void {
  	const values = this. getParts()

  	// Nem megfelelő számú érték lett megadva
  	if (values.length !== EXPECTED_VALUES_LENGTH) {
  		throw new TypeError(`[Cron] Nem megfelelő érték lett megadva! (${ values.length }db ${ EXPECTED_VALUES_LENGTH }db helyett)`)
  	}
  }

  private setValues (): void {
  	this. getParts().forEach((value, index) => {
  		this. setValue(value, index as TValueIndex)
  	})
  }

  private setValue (value: string, index: TValueIndex): void {
  	switch (index) {
  	case 0:
  		this.minutes = this.getValues(value).map((val) => this.getValue(val, index)).flat()
  		break
  	case 1:
  		this.hours = this.getValues(value).map((val) => this.getValue(val, index)).flat()
  		break
  	case 2:
  		this.dates = this. getValues(value).map((val) => this. getValue(val, index)).flat()
  		break
  	case 3:
  		this.months = this. getValues(value).map((val) => this. getValue(val, index)).flat()
  		break
  	default:
  		this.days = this. getValues(value).map((val) => this. getValue(val, index)).flat()
  	}
  }

  private getParts (): ReadonlyArray<string> {
  	return this.value.split(' ')
  }

  private getValues (value: string): ReadonlyArray<string> {
  	return value.split(',')
  }

  private getValue (value: string, index: TValueIndex): ReadonlyArray<number> {
  	// Az adott helyiértéken bármelyik szám szerepelhet
  	if (value === '*') {
  		const { min, max } = VALUE_INTERVALS[index]

  		const values = this.generateValues(min, max)

  		// Valamelyik generált érték nincs benne az intervallumban
  		const wrongNumber = values.find((number) => !this.isInInterval(`${ number }`, index))

  		if (typeof wrongNumber === 'number') {
  			throw new TypeError(`[Cron] A generált szám nem esik bele az intervallumba! (${ wrongNumber }, ${ min }-${ max })`)
  		}

  		return values
  	}
  	// Range van megadva
  	else if (value.includes('-')) {
  		const splittedValue = value.split('-')

  		// Nem megfelelő számú adat lett generálva
  		if (splittedValue.length !== 2) {
  			throw new TypeError(`[Cron] Hibás adat lett megadva! (${ value })`)
  		}

  		const [ min ] = splittedValue
  		let [ , max ] = splittedValue
  		let divider   = '1'

  		if (min.includes('/')) {
  			throw new TypeError(`[Cron] A range minimum értékében nem lehet /! (${ value })`)
  		}

  		// Megvan adva step
  		if (max.includes('/')) {
  			const splittedMax = max.split('/')

  			// Több / van az értékben
  			if (splittedMax.length !== 2) {
  				throw new TypeError(`[Cron] A range-ben túl sok / van megadva! (${ value })`)
  			}

  			max     = splittedMax[0]
  			divider = splittedMax[1]
  		}

  		// Az egyik érték nincs benne az intervallumban
  		if (!this.isInInterval(min, index) || !this.isInInterval(max, index) ) {
  			throw new TypeError(`[Cron] Az range-ben megadott minimum vagy maximum érték nincs benne a megfelelő intervallumban! (${ value })`)
  		}

  		return this.generateValues(Number(min), Number(max), Number(divider))
  	}

  	// Csak szám van megadva

  	// Intervallum ellenőrzés
  	if (!this.isInInterval(value, index)) {
  		throw new TypeError(`[Cron] A megadott szám nincs benne a megfelelő intevallumban! ${ value }`)
  	}

  	return [ Number(value) ]
  }

  private generateValues (min: number, max: number, divider = 1): ReadonlyArray<number> {
  	// Nullával osztás lekezelése
  	if (divider === 0) {
  		throw new TypeError(`[Cron] Nullával nem lehet osztani! (${ min }-${ max }/${ divider })`)
  	}

  	// A min értéke egyenlő, vagy nagyobb mint a max
  	if (max <= min) {
  		throw new TypeError(`[Cron] A megadott intervallumban a minimum értéke nagyobb, mint a maximum érték! (${ min } < ${ max })`)
  	}

  	const numbers = utils.number.times(max - min + 1, (i) => i + min)

  	/*
  	 * Minden `divider`. számot kell megtartani, tehát
  	 * 0-59/2 => [ 0, 2, 4, 6, ...58 ]
  	 * 1-59/2 => [ 1, 3, 5, 7, ...59 ]
  	 */
  	const dividedNumbers = numbers.filter((_, i) => i % divider === 0)

  	// Az osztás után nincs már érték a válasz listában
  	if (dividedNumbers.length === 0) {
  		throw new TypeError(`[Cron] Nem felel meg egy érték sem a megadott feltételnek! (${ min }-${ max }/${ divider })`)
  	}

  	return dividedNumbers
  }

  private isInInterval(value: string, index: TValueIndex): boolean {
  	const { min, max } = VALUE_INTERVALS[index]

  	try {
  		const number = Number(value)

  		return min <= number && number <= max
  	} catch (e) {
  		throw new TypeError(`[Cron] Nem megfelelő érték lett átadva az ${ index }. helyen! (${ value })`)
  	}

  }
}
