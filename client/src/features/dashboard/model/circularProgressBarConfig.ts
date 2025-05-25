import type { CircularProgressbarStyles } from 'react-circular-progressbar/dist/types'

export const circularProgressBarConfig: CircularProgressbarStyles = {
	path: {
		stroke: 'var(--color-primary)',
	},
	trail: {
		stroke: 'var(--color-main-hover)',
	},
	text: {
		fill: 'var(--color-secondary)',
    fontSize: '24px',
	}
}