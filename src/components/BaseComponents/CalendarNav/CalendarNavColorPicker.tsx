import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import StyledTooltip from '../CalendarStyledTooltip/CalendarStyledTooltip'
import ColorDot, { COLOR_TYPES } from './ColorDot'

import styles from './CalendarNavColorPicker.scss'
import themeStyles from '../../Calendar/CalendarThemes.scss'
import { Icon } from '@material-ui/core'

function setNewColorClass(color: string): void {
	const vColorName = color.replace(/ /g, '-')

	const themeElems: Array<HTMLElement> = Array.from(document.body.querySelectorAll('[data-theme-color]'))

	// Az összesről a témát beállító class-ok törlése
	themeElems.forEach((te) => {
		COLOR_TYPES.forEach((ct) => {
			te.classList.remove(themeStyles[ ct.replace(/ /g, '-') ])
		})
	})

	// Új színek beállítása
	themeElems.forEach((te) => {
		te.classList.add(themeStyles[ vColorName ])
	})
}

export default function CalendarNavColorPicker(): PlannerElement {
	const [ open, setOpen ] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleCancel = () => {
		setOpen(false)
	}

	const handleSet = () => {
		const act = document.querySelector('[data-selected-dot-color]') as HTMLElement ?? 'light-grey'

		const actualColor = act instanceof HTMLElement ? act.getAttribute('data-color-name') as string : act

		setNewColorClass(actualColor)

		setOpen(false)
	}

	const onClickColor = (e: React.MouseEvent<HTMLElement>): void => {
		const selectedElems: Array<HTMLElement> = Array.from(document.body.querySelectorAll('[data-selected-dot-color]'))

		selectedElems.forEach((se) => {
			se.removeAttribute('data-selected-dot-color')
		})
		const act = e.currentTarget as HTMLElement

		act.setAttribute('data-selected-dot-color', '')
	}

	const colorPicker = (
		<div>
			<StyledTooltip title='Téma kiválasztása' placement='bottom'>
				<div className={ styles.colorPickerContainer } onClick={handleClickOpen}>
					<Icon className={`fas fa-cog ${styles.colorPickerIcon}`}/>
				</div>
			</StyledTooltip>
			<Dialog
				open={open}
				onClose={handleCancel}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
            Téma kiválasztása
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						<div className={ styles.colorPickerDotsContainer }>
							{
								COLOR_TYPES.map((ct, i) => (
									<ColorDot color={ct} selected={false} key={`$ {ct}-${i}`} onClick={onClickColor}/>
								))
							}
						</div>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancel} color='default'>
              Mégse
					</Button>
					<Button onClick={handleSet} color='primary'>
              Mentés
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
	return colorPicker
}
