import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../components/counterSlice'
import dateReducer from '../components/dateSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    date: dateReducer,
  },
})


