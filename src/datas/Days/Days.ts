import { TBadgeIcon } from "../../components/BaseComponents/CalendarStyledBudge/CalendarStyledBudge"

// TODO: Szétszedni datas mappán belül Days, Moths elemekre, TS
export const DAY_NAMES = [ 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap' ] as const
export type TDay = typeof DAY_NAMES[number]

export interface IEvent {
  name: string
  icon?: TBadgeIcon
}

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
 * Meghatározza, hogy a mai napot tartalmazza-e a paraméter
 * @param date A megadott nap
 * @returns A megadott nap a mai-e
 */
export function isToday(date: Date): boolean {
	const today = new Date()
	return (today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === date.getDate())
}

/**
 * Meghatározza, hogy az adott nap hétvégén van-e
 * @param date A megadott nap
 * @returns A megadott nap hétvége
 */
export function isWeekend(date: TDay): boolean {
	return date === 'Szombat' || date === 'Vasárnap'
}
