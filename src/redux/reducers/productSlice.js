import {createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import {getList, postProduct, getProductDetails, deleteProduct} from '../../apis/api';

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

export const delProduct = createAsyncThunk(
    'fetchproducts/delete',
    async (id) => {
        const data = await deleteProduct(id);
        if (data.ok) {
            alert('deleted !')
        } else {
            alert('Can not connect to server !!')
        }
    }
)

// ------------------------------Create slice with extra reducers interact with async action
const initState = {
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
}
const validState = {
    ten: true,
    mota: true,
    CPU: true,
    RAM: true,
    Ocung: true,
    manhinh: true,
    cardmanhinh: true,
    congketnoi: true,
    hedieuhanh: true,
    thietke: true,
    kichthuockhoiluong: true,
    ngayramat:true,
    gia:true,
    khuyenmai:true,
    soluong:true,
    ngaynhap:true
}

export const ProductListSlice = createSlice({
    name: 'products',
    initialState: {
        product: { ...initState },
        productdetail: { ...initState },
        validinput: {...validState},
        products: [],
    },
    reducers: {
        addInfo (state, action){
            state.product = action.payload;
        },
        clearInfo(state) {
            state.product = initState;
        },
        validate(state, action) {
            state.validinput = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductList.fulfilled, (state, action) => {
            state.products = action.payload;
            })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.productdetail = action.payload;
            })
            // .addCase(delProduct.fulfilled, (state, action) => {
            //     console.log(state.products);
            // })
    }
}); 

export const { addInfo, addProduct, clearInfo, setactive, validate } = ProductListSlice.actions;
export default ProductListSlice;