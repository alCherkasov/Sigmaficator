import cn from 'classnames'
import type { ButtonProps } from './Button.interface.ts'
import styles from './Button.module.scss'

export function Button({
	children,
	color = 'primary',
	round = false,
	...props
}: ButtonProps) {
	const buttonClass = cn(styles['button'], styles[`${color}`], {
		[styles['round']]: round,
	})

	return (
		<button
			disabled={props.disabled}
			className={buttonClass}
			onClick={props.onClickFunc}
			style={props.styleOptions}
		>
			{children}
		</button>
	)
}
