import React from "react";

import { addInfo} from "../../redux/reducers/productSlice";
import { useDispatch, useSelector } from 'react-redux';
import Input from "../common/input";
import Drimg from '../../images/Drop img.png'
import "./style.css";
import { createProduct } from '../../redux/reducers/productSlice';

function CreateProducts() {
    const dispatch = useDispatch();
    const info = useSelector((state) => state.productlist.product)

// --------------------- listion input onchange
    function handleChange(e) {
        dispatch(addInfo({ ...info, [e.target.name]: e.target.value }))
    }

// --------------------- onclick add new product
    function addproduct() {
        dispatch(createProduct(info));
    }

    return (
        <div className="create-products" >
            <div className="add-info">
                <Input handleChange={handleChange} name='ten' value={info.ten} validfield='' type='text' title='Tên sản phẩm' />
                <Input handleChange={handleChange} name='mota' value={info.mota} title='Mô tả' />
                <Input handleChange={handleChange} name='CPU' value={info.CPU} type='text' title='CPU' />
                <Input handleChange={handleChange} name='RAM' value={info.RAM} type='text' title='Ram' />
                <Input handleChange={handleChange} name='Ocung' value={info.Ocung} type='text' title='Ổ cứng' />
                <Input handleChange={handleChange} name='manhinh' value={info.manhinh} type='text' title='Màn hình' />
                <Input handleChange={handleChange} name='cardmanhinh' value={info.cardmanhinh} type='text' title='Card màn hình' />
                <Input handleChange={handleChange} name='congketnoi' value={info.congketnoi} type='text' title='Cổng kết nối' />
            </div>
            <div className="add-imgs_sale-info">
                <div className="sale-info">
                    <Input handleChange={handleChange} name='hedieuhanh' value={info.hedieuhanh} type='text' title='Hệ điều hành' />
                    <Input handleChange={handleChange} name='thietke' value={info.thietke} type='text' title='Thiết kế' />
                    <Input handleChange={handleChange} name='kichthuockhoiluong' value={info.kichthuockhoiluong} type='text' title='Kích thước, khối lượng' />
                    <Input handleChange={handleChange} name='ngayramat' value={info.ngayramat} type='date' title='Ngày ra mắt' />
                    <Input handleChange={handleChange} name='gia' value={info.gia} type='number' title='Giá sản phẩm' />
                    <Input handleChange={handleChange} name='soluong' value={info.soluong} type='number' title='Số lượng' />
                    <Input handleChange={handleChange} name='khuyenmai' value={info.khuyenmai} type='number' title='Khuyến mãi' />
                    <Input handleChange={handleChange} name='ngaynhap' value={info.ngaynhap} type='date' title='Ngày nhập' />
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
