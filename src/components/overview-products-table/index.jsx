import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getProductList, delProduct } from '../../redux/reducers/productSlice';
import { discount, formatNb } from '../../functions/inputvalidation';
import Search from '../common/search';
import Buttons from '../common/smallbuttons';
import './style.css';

function Overview() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.productlist.products);

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    // console.log('rendering......');
    
    function handleDel(id) {
        if (window.confirm('delete this product ??')) {
            dispatch(delProduct(id));
            dispatch(getProductList());
        }
    }
    
    return (
        <div className='over-view'>
            <Search />
            <div className="table-wraper">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Price <span>(vnd)</span></th>
                            <th>Discount <span>(vnd)</span></th>
                            <th>Stock <span>(pcs)</span></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, idx) => {
                            const price = formatNb(item.gia);
                            const saleprice = discount(item.gia, item.khuyenmai);

                            return (
                                <tr key={idx} onClick={() => {
                                    navigate(`/admin/products/${item.id}`);
                                }}>
                                    <td>{(idx + 1)}</td>
                                    <td>{item.ten}</td>
                                    <td>{price}</td>
                                    <td>{saleprice}</td>
                                    <td>{item.soluong}</td>
                                    <td>
                                        <Buttons
                                            buttonName='Edit'
                                            buttonSize='small'
                                            marGin='0px 10px 0px 0px'
                                        />
                                        <Buttons
                                            buttonName='Delete'
                                            buttonSize='small'
                                            onClick={(e) => {
                                                handleDel(item.id)
                                                e.stopPropagation();
                                                }
                                            }
                                        />
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