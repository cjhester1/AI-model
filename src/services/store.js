import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

//store => global state that saves entire state of app
export const store = configureStore({
    //reducer compartmentalizes this state to only what we want - article api
    reducer: {
[articleApi.reducerPath]: articleApi.reducer

    },
    //middleware => lets us do something with the state before we get it 
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(articleApi.middleware)
});