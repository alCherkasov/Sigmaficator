import cn from 'classnames'
import type { InputProps } from './Input.interface'
import styles from './Input.module.scss'

export function Input({ error = null, ...props }: InputProps) {
	const inputClass = cn(styles['input'], {
		[styles['error']]: error,
	})

	return (
		<div className={styles['input-wrapper']}>
			<input
				className={inputClass}
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
