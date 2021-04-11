import React from 'react'

import { withStyles, createStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import Badge from '@material-ui/core/Badge'

const BADGE_ICON_STYLES = [
	'cheers', // Újév
	'carrot', // Húsvét
	'birthday', // Születésnap
	'ghost', // Halloween
	'sleigh', // Mikulás
	'gift', // Karácsony
	'star', // Star
	'heart' // Szív
] as const
export type TBadgeIcon = typeof BADGE_ICON_STYLES[number]

interface IStyledBadgeProps {
  content: number | TBadgeIcon
  index: number
}

type TBadgeIconColor = Record<TBadgeIcon, string>
const BADGE_ICON_COLORS: TBadgeIconColor = {
	'cheers': '#87CEEB',
	'carrot': '#FFA500',
	'birthday': '#A52A2A',
	'ghost': '#DCDCDC',
	'sleigh': '#DC143C',
	'gift': '#32CD32',
	'star': '#FFD700',
	'heart': '#FF1493'
}

type TBadgeIconClass = Record<TBadgeIcon, string>
const BADGE_ICON_CLASSES: TBadgeIconClass = {
	'cheers': 'fas fa-glass-cheers',
	'carrot': 'fas fa-carrot',
	'birthday': 'fas fa-birthday-cake',
	'ghost': 'fas fa-ghost',
	'sleigh': 'fas fa-sleigh',
	'gift': 'fas fa-gift',
	'star': 'fas fa-star',
	'heart': 'fas fa-heart'
}

export function renderStyledBadge (props: IStyledBadgeProps): JSX.Element {
	const StyledBadge = withStyles(() =>
		createStyles({
			badge: {
				position: 'absolute',
				right: `${ props.index * 20 + 5 }px`,
				top: '45px',
				marginRight: '2px',
				padding: '1px 8px',
				fontFamily: 'Montserrat',
				backgroundColor: typeof props.content === 'number' ? '#ECECEC' : 'transparent',
				color: typeof props.content === 'number' ? '#999999' : BADGE_ICON_COLORS[props.content],
				fontSize: typeof props.content === 'number' ? '.7rem' : '20px',
				height: '16px'
			},
		}),
	)(Badge)

	return <StyledBadge badgeContent={
		typeof props.content === 'number' ? props.content : <Icon className={ BADGE_ICON_CLASSES[props.content] }
			style={{ fontSize: '15px' }} />
	} />
}
