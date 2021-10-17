import React from 'react'
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles'
import ToolTip, { TooltipProps } from '@material-ui/core/Tooltip'

const styledTooltip = makeStyles((theme: Theme) => ({ tooltip: { backgroundColor: theme.palette.common.black, fontSize: 13, } }))

export default function StyledToolTip(props: TooltipProps): JSX.Element {
	const classes = styledTooltip()
	return <ToolTip classes={classes} {...props}/>
}
