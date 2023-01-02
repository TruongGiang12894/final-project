import {createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import {getList, postProduct, getProductDetails} from '../../apis/api';

// -----------------------------create Async Thunk action
export const getProductList = createAsyncThunk(
    'fetchproducts/get',
    async () => {
        const data = await getList();
        if (data.ok) {
            return data.json()
        } else {
            alert('Can not connect to server !!')
        }
    }
)

export const getDetails = createAsyncThunk(
    'fetproductdetails/get',
    async (id) => {
        const data = await getProductDetails(id);
        if (data.ok) {
            return data.json()
        } else {
            alert('Can not connect to server !!')
        }
    }
)

export const createProduct = createAsyncThunk(
    'fetchproducts/post',
    async (inputPost) => {
        const data = await postProduct(inputPost);
        if (data.ok) {
            alert('successed !')
        } else {
            alert('Can not connect to server !!')
        }
    }
)

// ------------------------------Create slice with extra reducers interact with async action
export const ProductListSlice = createSlice({
    name: 'products',
    initialState: {
        product: {
            ten: '',
            mota: '',
            CPU: '',
            RAM: '',
            Ocung: '',
            manhinh: '',
            cardmanhinh: '',
            congketnoi: '',
            hedieuhanh: '',
            thietke: '',
            kichthuockhoiluong: '',
            ngayramat:'',
            gia:'',
            khuyenmai:'',
            soluong:'',
            ngaynhap:''
        },
        path:false,
        products: [],
        failed:''
    },
    reducers: {
        addInfo (state, action){
            state.product = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductList.fulfilled, (state, action) => {
            state.products = action.payload;
            })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.product = action.payload;
                const path = document.location.pathname;
                const splicePath = path.split('/');
                console.log(splicePath.includes('4'));
            })
    }
}); 

export const { addInfo, addProduct } = ProductListSlice.actions;
export default ProductListSlice;