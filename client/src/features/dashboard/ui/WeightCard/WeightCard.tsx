import {
	decreaseWeight,
	increaseWeight,
} from '@features/dashboard/model/userWeight.slice'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/reduxHooks'
import { getPercantage } from '@shared/lib/utils/utils'
import { Button, Icon } from '@shared/ui'
import styles from './WeightCard.module.scss'

export function WeightCard() {
	const dispatch = useAppDispatch()
	const selectWeight = useAppSelector(state => state.userWeight.weight)

	const weight = +selectWeight.toFixed(1)
	const initWeight = 89.0
	const targetWeight = 77.0
	return (
		<div className={styles['weight-card']}>
			<div className={styles['body']}>
				<div className={styles['top-row']}>
					<p className={styles['weight']}>{weight}кг</p>
					<div className={styles['progress-bar-wrapper']}>
						<div className={styles['progress-bar']}>
							<div
								className={styles['progress']}
								style={{
									width: `${getPercantage(
										initWeight - weight,
										initWeight - targetWeight
									)}%`,
								}}
							/>
						</div>
						<div className={styles['weight-range']}>
							<p className={styles['init-weight']}>{initWeight}кг</p>
							<p className={styles['target-weight']}>{targetWeight}кг</p>
						</div>
					</div>
				</div>
				<div className={styles['bottom-row']}>
					<Button color='transparent' styleOptions={{ alignSelf: 'end' }}>
						Обновить цель
					</Button>
					<div className={styles['controls']}>
						<div className={styles['button-wrapper']}>
							<p className={styles['button-tip']}>+ 0.1</p>
							<Button
								round={true}
								onClickFunc={() => dispatch(increaseWeight())}
								styleOptions={{ paddingRight: '5px' }}
							>
								<Icon id='prev-arrow' />
							</Button>
						</div>
						<div className={styles['button-wrapper']}>
							<p className={styles['button-tip']}>- 0.1</p>
							<Button
								round={true}
								onClickFunc={() => dispatch(decreaseWeight())}
								styleOptions={{ paddingLeft: '5px' }}
							>
								<Icon id='next-arrow' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
