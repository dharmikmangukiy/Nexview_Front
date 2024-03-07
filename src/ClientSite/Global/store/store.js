import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";
import authReducer from '../../../faceLogin/features/auth/authSlice'
import facenetReducer from '../../../faceLogin/features/auth/facenetSlice'
import userReducer from '../../../faceLogin/features/dashboard/userSlice'
import matchReducer from '../../../faceLogin/features/dashboard/matchSlice'
import detectReducer from '../../../faceLogin/features/dashboard/detectSlice'
import similarityReducer from '../../../faceLogin/features/dashboard/similaritySlice'
export const store = configureStore({
    reducer: {
        home: homeSlice,
        auth: authReducer,
        facenet: facenetReducer,
        user: userReducer,
        match: matchReducer,
        detect: detectReducer,
        similarity: similarityReducer,
    },
});
