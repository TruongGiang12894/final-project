const ULR = 'http://localhost:8000';
const productApis = {
    getList: () => {
        const getdata = fetch(`${ULR}/products`)
        return getdata
    },   
    
    getProductDetails: (id) => {
        const getDetails = fetch(`${ULR}/products/${id}`)
        return getDetails
    },

    postProduct: (inputPost) => {
        const postdata = fetch(`${ULR}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputPost)
        })
            // .then((response) => response.json())
            // .then((data) => console.log(data))
            // .catch((err) => console.log(err, 'Sending failed!'));
        return postdata;
    },

    updateProduct: (inputUpdate, id) => {
        const putdata = fetch(`${ULR}/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputUpdate)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err, 'Sending failed!'));
        return putdata;
    },

    deleteProduct: (id) => {
        const deletedata = fetch(`${ULR}/products/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
        })
        return deletedata;
    }
}
export const {getList, postProduct,updateProduct, deleteProduct, getProductDetails} = productApis;
    
