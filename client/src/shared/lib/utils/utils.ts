export const getPercantage = (value: number, maxValue: number): number => {
	console.log(Math.round((value / maxValue) * 100))
	return Math.round((value / maxValue) * 100)
}