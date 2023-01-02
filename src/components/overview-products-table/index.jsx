import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getProductList } from '../../redux/reducers/productSlice';
import Search from '../common/search';
import Buttons from '../common/smallbuttons';
import './style.css';

function Overview(props) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productlist.products);
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch]);

    // function changeRoute() {
    //     navigate(`${productId}`)
    //     // console.log(id);
    // }

    return (
        <div className='over-view'>
            <Search />
            <div className="table-wraper">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price <span>(vnd)</span></th>
                            <th>Discount <span>(%)</span></th>
                            <th>Stock <span>(pcs)</span></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, idx) => {
                            return (
                                <tr key={idx} onClick={() => { navigate(`/admin/products/${item.id}`)}}>
                                    <td>{item.id}</td>
                                    <td>{item.ten}</td>
                                    <td>{item.gia}</td>
                                    <td>{item.khuyenmai}</td>
                                    <td>{item.soluong}</td>
                                    <td>
                                        <Buttons buttonName='Edit' buttonSize='small' marGin='0px 10px 0px 0px' />
                                        <Buttons buttonName='Delete' buttonSize='small' />
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Overview;