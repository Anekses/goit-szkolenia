import { filtersReducer } from "./reducer";
import { tasksReducer } from "./tasksSlice";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { authReducer } from "./auth/slice";

const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        tasks: tasksReducer,
        filters: filtersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store)