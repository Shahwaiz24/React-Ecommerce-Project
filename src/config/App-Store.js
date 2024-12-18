import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "../services/Slices/Auth-Slices";

const AppStore = configureStore({
    reducer: {
      auth:AuthReducers
    }

});

export default AppStore;