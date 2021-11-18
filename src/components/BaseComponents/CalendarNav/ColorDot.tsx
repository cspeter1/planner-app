import React from 'react'

import Icon from '@material-ui/core/Icon'
import StyledTooltip from '../CalendarStyledTooltip/CalendarStyledTooltip'

import styles from './ColorDot.scss'

export const COLOR_TYPES = [ 'white', 'black', 'cyan', 'dodger blue', 'dark blue', 'chocolate', 'saddle brown', 'maroon', 'green yellow', 'lime', 'dark green', 'grey', 'dark grey', 'tomato', 'orange', 'light pink', 'deep pink', 'pale violet red', 'orchid', 'magenta', 'purple', 'blue violet', 'light coral', 'crimson', 'dark red', 'gold', 'yellow', 'peach puff' ] as const
export type TColorType = typeof COLOR_TYPES[number]

interface IColorDotProps {
  color: TColorType
  selected: boolean
	onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export default function ColorDot(props: IColorDotProps): PlannerElement {
	// const [ select, setSelect ] = React.useState(props.selected)
	// const [actualColor, setActualColor] = React.useState(props.color)

	const { color, selected, onClick } = props

	const dotClass = color.replace(/\ /g, '-')

	return (
		<StyledTooltip title={`${ utils.string.capitalize(color)}`}>
			<div className={styles.colorDotContainer} onClick={ onClick } data-color-name={ color }>
				<div className={`${styles.colorDot} ${styles[ dotClass ]}`}>
					<Icon className='fas fa-check' />
				</div>
			</div>
		</StyledTooltip>
	)
}
