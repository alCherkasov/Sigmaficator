import type { ButtonProps } from './Button.interface.ts'
import styles from './Button.module.scss'

export default function Button({
	children,
	color = 'primary',
	...props
}: ButtonProps) {
	const resultClass = `${styles['button']} ${styles[`${color}`]}`

	return (
		<button disabled={props.disabled} className={resultClass}>
			{children}
		</button>
	)
}
