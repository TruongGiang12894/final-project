import React from "react";

import { addInfo, clearInfo, validate} from "../../redux/reducers/productSlice";
import { useDispatch, useSelector } from 'react-redux';
import Input from "../common/input";
import Drimg from '../../images/Drop img.png'
import { createProduct } from '../../redux/reducers/productSlice';
import { checkLengthInput } from "../../functions/inputvalidation";
import "./style.css";

function CreateProducts() {
    const dispatch = useDispatch();
    const info = useSelector((state) => state.productlist.product)
    const validinput = useSelector((state) => state.productlist.validinput)
    // console.log(Object.values(info));
// --------------------- listen input onchange
    function handleChange(e) {
        dispatch(addInfo({ ...info, [e.target.name]: e.target.value })) 
        dispatch(validate({ ...validinput, [e.target.name]: e.target.value }))
        const checklength = checkLengthInput(e.target.value, 3, 30);
        console.log(checklength);
    }

// --------------------- onclick add new product
    function addproduct() {
        const infolist = Object.values(info)
        dispatch(validate(info))
        for (const item of infolist) {
            if (item === '') { 
                alert('chua nhap du thong tin')
                return
            } 
        }
            dispatch(createProduct(info));
            dispatch(clearInfo());
    }
        
    return (
        <div className="create-products" >
            <div className="add-info">
                <Input handleChange={handleChange} name='ten' value={info.ten} validfield={validinput.ten} type='text' title='Tên sản phẩm' />
                <Input handleChange={handleChange} name='mota' value={info.mota} validfield={validinput.mota} title='Mô tả' />
                <Input handleChange={handleChange} name='CPU' value={info.CPU} validfield={ validinput.CPU} type='text' title='CPU' />
                <Input handleChange={handleChange} name='RAM' value={info.RAM} validfield={ validinput.RAM} type='text' title='Ram' />
                <Input handleChange={handleChange} name='Ocung' value={info.Ocung} validfield={validinput.RAM} type='text' title='Ổ cứng' />
                <Input handleChange={handleChange} name='manhinh' value={info.manhinh} validfield={validinput.manhinh} type='text' title='Màn hình' />
                <Input handleChange={handleChange} name='cardmanhinh' value={info.cardmanhinh} validfield={validinput.cardmanhinh} type='text' title='Card màn hình' />
                <Input handleChange={handleChange} name='congketnoi' value={info.congketnoi} validfield={validinput.congketnoi} type='text' title='Cổng kết nối' />
            </div>
            <div className="add-imgs_sale-info">
                <div className="sale-info">
                    <Input handleChange={handleChange} name='hedieuhanh' value={info.hedieuhanh} validfield={validinput.hedieuhanh} type='text' title='Hệ điều hành' />
                    <Input handleChange={handleChange} name='thietke' value={info.thietke} validfield={validinput.thietke} type='text' title='Thiết kế' />
                    <Input handleChange={handleChange} name='kichthuockhoiluong' value={info.kichthuockhoiluong} validfield={validinput.kichthuockhoiluong} type='text' title='Kích thước, khối lượng' />
                    <Input handleChange={handleChange} name='ngayramat' value={info.ngayramat} validfield={validinput.ngayramat} type='date' title='Ngày ra mắt' />
                    <Input handleChange={handleChange} name='gia' value={info.gia} validfield={validinput.gia} type='number' title='Giá sản phẩm' />
                    <Input handleChange={handleChange} name='soluong' value={info.soluong} validfield={validinput.soluong} type='number' title='Số lượng' />
                    <Input handleChange={handleChange} name='khuyenmai' value={info.khuyenmai} validfield={validinput.khuyenmai} type='number' title='Khuyến mãi' />
                    <Input handleChange={handleChange} name='ngaynhap' value={info.ngaynhap} validfield={validinput.ngaynhap} type='date' title='Ngày nhập' />
                </div>
                <div className="imgs">
                    <div className="img"><img src={Drimg} alt="oops" /></div>
                    <div className="img"><img src={Drimg} alt="oops" /></div>
                    <div className="img"><img src={Drimg} alt="oops" /></div>
                    <div className="img"><img src={Drimg} alt="oops" /></div>
                    <div className="img"><img src={Drimg} alt="oops" /></div>
                </div>
                <div className="add-buttons">
                    <button className="save-product" onClick={addproduct}>Save</button>
                    <button className="clear-info">Clear</button>
                </div>
            </div>
        </div>
    );
}

export default CreateProducts;
