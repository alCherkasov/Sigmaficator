import type { InputProps } from './Input.interface'
import styles from './Input.module.scss'

export default function Input({ error = null, ...props }: InputProps) {
	const resultClass = error
		? `${styles['input']} ${styles['error']}`
		: `${styles['input']}`

	return (
		<div className={styles['input-wrapper']}>
			<input
				className={resultClass}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
			{error && <p className={styles['error-message']}>{error}</p>}
		</div>
	)
}
