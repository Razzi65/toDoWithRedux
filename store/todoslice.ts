import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const ToDoSlice = createSlice({
    name: 'todo',
    initialState: {todoevent:[], error:null},
    reducers: {
        addToDo: (state, action)=> {
                return state
        }
    }
})

export default ToDoSlice.reducer

export const {addToDo} = ToDoSlice.actions