import { createSlice } from '@reduxjs/toolkit'
import type { IUserWeight } from './types'

const initialState: IUserWeight = {
	weight: 80.3
}

export const userWeightSlice = createSlice({
	name: 'userWeight',
	initialState,
	reducers: {
		increaseWeight: (state) => {
			state.weight += 0.1
		},
		decreaseWeight: (state) => {
			state.weight -= 0.1
		}
	}
})

export const {increaseWeight, decreaseWeight} = userWeightSlice.actions
export default userWeightSlice.reducer