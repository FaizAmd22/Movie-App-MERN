import { configureStore } from "@reduxjs/toolkit"
import appStateSlice from "./features/appStateSlice.js";
import authModalSlice from "./features/authModalSlice.js";
import globalLoadingSlice from "./features/globalLoadingSlice.js";
import themeModeSlice from "./features/themeModeSlice.js";
import userSlice from "./features/userSlice.js"

const store = configureStore({
    reducer: {
        user: userSlice,
        themeMode: themeModeSlice,
        authModal: authModalSlice,
        globalLoading: globalLoadingSlice,
        appState: appStateSlice
    }
})

export default store;