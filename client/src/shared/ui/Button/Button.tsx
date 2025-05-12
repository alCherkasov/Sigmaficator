import cn from 'classnames'
import type { ButtonProps } from './Button.interface.ts'
import styles from './Button.module.scss'

export default function Button({
	children,
	color = 'primary',
	...props
}: ButtonProps) {
	const buttonClass = cn(styles['button'], styles[`${color}`])

	return (
		<button disabled={props.disabled} className={buttonClass}>
			{children}
		</button>
	)
}
