import { TBadgeIcon } from "../../components/BaseComponents/CalendarStyledBudge/CalendarStyledBudge"

// A hét napja
export const DAY_NAMES = [ 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap' ] as const
export type TDay = typeof DAY_NAMES[number]

// A mához képest milyen nap van
export const ACTUAL_DAY_NAMES = [ 'tegnapelőtt', 'tegnap', 'ma', 'holnap', 'holnapután' ] as const
export type TActualDay = typeof ACTUAL_DAY_NAMES[number] | `${ number }. ${ number }. ${ number }.`

export interface IEvent {
  name: string
  icon?: TBadgeIcon
}

/**
 * Megadja, hogy a kiválasztott dátum a hét melyik napja
 * @param date A megadott dátum
 * @returns A megadott dátum a hét melyik napja
 */
export function getDayName(date: Date): TDay{
	const dayCount = date.getDay()

	switch (dayCount) {
	case 1:  return 'Hétfő'
	case 2:  return 'Kedd'
	case 3:  return 'Szerda'
	case 4:  return 'Csütörtök'
	case 5:  return 'Péntek'
	case 6:  return 'Szombat'
	default: return 'Vasárnap'
	}
}

/**
 * Meghatározza, hogy a paraméterben megadott napok egy napon vannak
 * @param firstDate Az első dátum
 * @param secondDate A második dátum
 * @returns A két dátum egyenlő-e
 */
export function isEqualDates(firstDate: Date, secondDate: Date): boolean {
	return (firstDate.getFullYear() === secondDate.getFullYear() && firstDate.getMonth() === secondDate.getMonth() && firstDate.getDate() === secondDate.getDate())
}

/**
 * Meghatározza, hogy a mai napot tartalmazza-e a paraméter
 * @param date A megadott nap
 * @returns A megadott nap a mai-e
 */
export function isToday(date: Date): boolean {
	const today = new Date()
	return isEqualDates(date, today)
}


/**
 * Megállapítja, hogy a paraméterben megadott nap tegnap volt-e
 * @param date A megadott nap
 * @returns A megadott nap tegnap volt?
 */
export function isYesterDay(date: Date): boolean {
	// Tegnapi dátum
	const yesterday = new Date()
	yesterday.setDate(yesterday.getDate() - 1)

	return isEqualDates(date, yesterday)
}

/**
 * Megvizsgálja, hogy a megadott dátum tegnapelőtt van-e
 * @param date Megadott dátum
 * @returns Tegnapelőtt van-e a megadott dátum
 */
export function isBeforeYesterDay(date: Date): boolean {
	// Tegnapelőtti dátum
	const beforeYesterday = new Date()
	beforeYesterday.setDate(beforeYesterday.getDate() - 2)

	return isEqualDates(date, beforeYesterday)
}

/**
 * Megállapítja, hogy a megadott dátum holnap van-e
 * @param date A megadott dátum
 * @returns Holnap van-e a nap
 */
export function isTomorrow (date: Date): boolean {
	// Holnapi dátum
	const tomorrow = new Date()
	tomorrow.setDate(tomorrow.getDate() + 1)

	return isEqualDates(date, tomorrow)
}

/**
 * Megállapítja, hogy a megadott dátum holnapután van-e
 * @param date A megadott dátum
 * @returns Holnapután van-e a nap
 */
export function isAfterTomorrow (date: Date): boolean {
	// Holnaputáni dátum
	const afterTomorrow = new Date()
	afterTomorrow.setDate(afterTomorrow.getDate() + 2)

	return isEqualDates(date, afterTomorrow)
}

/**
 * Megvizsgálja, hogy a mai naphoz képest a megadott dátum melyik nap
 * @param date A kiválasztott dátum
 * @returns Visszaadja, a mai naphoz képest milyen dátumot adtunk meg
 */
export function getActualDay (date: Date): TActualDay {
	// Tegnapelőtt
	if (isBeforeYesterDay(date)) {
		return 'tegnapelőtt'
	}
	// Tegnap
	else if (isYesterDay(date)) {
		return 'tegnap'
	}
	// Ma
	else if (isToday(date)) {
		return 'ma'
	}
	// Holnap
	else if (isTomorrow(date)) {
		return 'holnap'
	}
	// Holnapután
	else if (isAfterTomorrow(date)) {
		return 'holnapután'
	}
	// Egyéb dátum
	return `${ date.getFullYear() }. ${ date.getMonth() + 1 }. ${ date.getDate() + 1 }.` as TActualDay
}

/**
 * Meghatározza, hogy az adott nap hétvégén van-e
 * @param date A megadott nap
 * @returns A megadott nap hétvége
 */
export function isWeekend(date: TDay): boolean {
	return date === 'Szombat' || date === 'Vasárnap'
}
