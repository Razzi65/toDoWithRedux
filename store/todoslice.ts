import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const ToDoSlice = createSlice({
    name: 'todo',
    initialState: {todoevent:[]},
    reducers: {
        addToDo: (state, action)=> {
            
        }
    }
})

export default ToDoSlice.reducer