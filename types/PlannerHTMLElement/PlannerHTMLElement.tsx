import React from 'react'

type ClassNameType = string | Array<string>

export interface PlannerHTMLElementProps extends Omit<React.HTMLAttributes<HTMLElement>, 'className'> {
  className?: ClassNameType
}

export const PlannerHTMLElement = (props: PlannerHTMLElementProps): React.ReactElement<HTMLElement> => {
	const { className, ...rest } = props

	return <div {...rest} className={ Array.isArray(className) ? className.join(' ') : className } />
}
