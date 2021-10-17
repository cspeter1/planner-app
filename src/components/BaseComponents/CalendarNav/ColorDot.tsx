import React from 'react'

import Icon from '@material-ui/core/Icon'
import StyledTooltip from '../CalendarStyledTooltip/CalendarStyledTooltip'

import styles from './ColorDot.scss'

export const COLOR_TYPES = ['white', 'black', 'cyan', 'dodger blue', 'dark blue', 'chocolate', 'saddle brown', 'maroon', 'green yellow', 'lime', 'dark green', 'grey', 'dark grey', 'tomato', 'orange', 'light pink', 'deep pink', 'pale violet red', 'orchid', 'magenta', 'purple', 'blue violet', 'light coral', 'crimson', 'dark red', 'gold', 'yellow', 'peach puff'] as const
export type TColorType = typeof COLOR_TYPES[number]

interface IColorDotProps {
  color: TColorType
  selected: boolean
	onClick: (e: React.MouseEvent<HTMLElement>) => void
}

function capitalize (s: string): string {
	return s.charAt(0).toLocaleUpperCase() + s.slice(1)
}

export default function ColorDot(props: IColorDotProps): JSX.Element {
	// const [ select, setSelect ] = React.useState(props.selected)
	// const [actualColor, setActualColor] = React.useState(props.color)

	const dotClass = props.color.replace(/\ /g, '-')

	return (
		<StyledTooltip title={`${ capitalize(props.color) }`}>
			<div className={styles.colorDotContainer} onClick={props.onClick} data-color-name={ props.color }>
				<div className={`${styles.colorDot} ${styles[dotClass]}`}>
					<Icon className="fas fa-check" />
				</div>
			</div>
		</StyledTooltip>
	)
}
