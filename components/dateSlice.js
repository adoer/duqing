import { createSlice } from '@reduxjs/toolkit'

export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    value: null,
  },
  reducers: {
    updateDate: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateDate } = dateSlice.actions


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectDate = (state) => state.date.value

export default dateSlice.reducer
