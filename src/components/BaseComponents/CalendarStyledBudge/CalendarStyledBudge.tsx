import React from 'react'

import { withStyles, createStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import Badge from '@material-ui/core/Badge'

const BADGE_ICON_STYLES = [
	'gift', 		// Karácsony
	'star', 		// Star
	'ghost', 		// Halloween
	'heart', 		// Szív
	'cheers', 	// Újév
	'carrot', 	// Húsvét
	'sleigh', 	// Mikulás
	'birthday', // Születésnap
] as const
export type TBadgeIcon = typeof BADGE_ICON_STYLES[number]

interface IStyledBadgeProps {
  content: number | TBadgeIcon
  index: number
}

type TBadgeIconColor = Record<TBadgeIcon, string>
const BADGE_ICON_COLORS: TBadgeIconColor = {
	'gift': 		'#32CD32',
	'star': 		'#FFD700',
	'ghost':	 	'#DCDCDC',
	'heart': 		'#FF1493',
	'cheers': 	'#87CEEB',
	'carrot': 	'#FFA500',
	'sleigh': 	'#DC143C',
	'birthday': '#A52A2A',
}

type TBadgeIconClass = Record<TBadgeIcon, string>
const BADGE_ICON_CLASSES: TBadgeIconClass = {
	'gift': 		'fas fa-gift',
	'star': 		'fas fa-star',
	'ghost': 		'fas fa-ghost',
	'heart': 		'fas fa-heart',
	'cheers': 	'fas fa-glass-cheers',
	'carrot': 	'fas fa-carrot',
	'sleigh': 	'fas fa-sleigh',
	'birthday': 'fas fa-birthday-cake',
}

export function renderStyledBadge (props: IStyledBadgeProps): PlannerElement {
	const { content, index } = props

	const StyledBadge = withStyles(() => createStyles({
		badge: {
			position: 'absolute',
			right: `${ index * 20 + 5 }px`,
			top: '45px',
			marginRight: '2px',
			padding: '1px 8px',
			fontFamily: 'Montserrat',
			backgroundColor: typeof content === 'number' ? '#ECECEC' : 'transparent',
			color: typeof content === 'number' ? '#999999' : BADGE_ICON_COLORS[ content ],
			fontSize: typeof content === 'number' ? '.7rem' : '20px',
			height: '16px'
		},
	}),
	)(Badge)

	return <StyledBadge badgeContent={
		typeof content === 'number' ? content : <Icon className={ BADGE_ICON_CLASSES[ content ] }
			style={{ fontSize: '15px' }} />
	} />
}
