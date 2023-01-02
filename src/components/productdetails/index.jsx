import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from '../../redux/reducers/productSlice'

import Buttons from "../common/smallbuttons";
import Slideimg from "../slideimg";
import "./style.css";

function Productdetails() {
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productlist.product)
    const { productId } = useParams();

    const {ten,
    mota,
    CPU,
    RAM,
    Ocung,
    manhinh,
    cardmanhinh,
    congketnoi,
    hedieuhanh,
    thietke,
    kichthuockhoiluong,
    ngayramat,
    gia,
    khuyenmai,
    soluong,
    ngaynhap} = productDetails

    useEffect(() => {
        dispatch(getDetails(productId))
    }, [dispatch, productId]);

    return (
        <div className="productdetails">
            <div className="detail1">
                <Slideimg />
                <Buttons buttonName='Edit product' buttonSize='medium' marGin='10px auto'/>
            </div>
            <div className="detail2">
                <table>
                    <thead>
                        <tr>
                            <th>Mô tả sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tên</td>
                            <td>{ten}</td>
                        </tr>
                        <tr>
                            <td>Mô tả</td>
                            <td>{mota}</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>{CPU}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{RAM}</td>
                        </tr>
                        <tr>
                            <td>Ổ cứng</td>
                            <td>{Ocung}</td>
                        </tr>
                        <tr>
                            <td>Màn hình</td>
                            <td>{manhinh}</td>
                        </tr>
                        <tr>
                            <td>Card màn hình</td>
                            <td>{cardmanhinh}</td>
                        </tr>
                        <tr>
                            <td>Cổng kết nối</td>
                            <td>{congketnoi}</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành</td>
                            <td>{hedieuhanh}</td>
                        </tr>
                        <tr>
                            <td>Thiết kế</td>
                            <td>{thietke}</td>
                        </tr>
                        <tr>
                            <td>Kích thước, khối lượng</td>
                            <td>{kichthuockhoiluong}</td>
                        </tr>
                        <tr>
                            <td>Thời điểm ra mắt:</td>
                            <td>{ngayramat}</td>
                        </tr>
                        <tr>
                            <td>Giá</td>
                            <td>{gia}</td>
                        </tr>
                        <tr>
                            <td>Khuyến mãi</td>
                            <td>{khuyenmai}</td>
                        </tr>
                        <tr>
                            <td>Số lượng</td>
                            <td>{soluong}</td>
                        </tr>
                        <tr>
                            <td>Ngày nhập</td>
                            <td>{ngaynhap}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Productdetails;
