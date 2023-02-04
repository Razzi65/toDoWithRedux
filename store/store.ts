import { configureStore } from '@reduxjs/toolkit'
import  ToDoSlice  from './todoslice'

export const store = configureStore({
  reducer: {
    ToDoSlice
  },
})