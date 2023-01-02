import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "../reducers/productSlice";

const store = configureStore({
    reducer: {
        productlist: ProductListSlice.reducer,
    }
});
export default store;