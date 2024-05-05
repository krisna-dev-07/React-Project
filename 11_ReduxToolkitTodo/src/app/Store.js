import {configureStore} from '@reduxjs/toolkit'
import { todoSlice } from '../features/Todo/todoslice'

export const store=configureStore({
    reducer:todoSlice
})