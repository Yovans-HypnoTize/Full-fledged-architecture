import { configureStore } from "@reduxjs/toolkit";
import { SlicePathConstants } from "../utils/Constants";

export const store = configureStore({
    reducer: {
        home: SlicePathConstants.homeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch