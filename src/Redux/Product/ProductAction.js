export const ADD_PRODUCT = "ADD_PRODUCT";

export const DELETE_PRODUCT = "DELETE_PRODUCT"
export  const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    };
}
