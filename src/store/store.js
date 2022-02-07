import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './jobs'

export default configureStore({
  reducer: {
    jobs: jobsReducer
  },
})