import store from "../Store/Store"
export const accessoriesAction = (dispatch) => {
    let accessoriesData = store.getState().accessories;
    const fetchAccessoriesData = () => {
        fetch(`http://localhost:4000/products/accessories`).then((res) => { return res.json() }).then((data) => {
            dispatch({
                type: "accessories",
                payload: data
            })
        })
    }
    if (accessoriesData.length == 0) {
        fetchAccessoriesData();
    }
}

export const clothingAction = (dispatch) => {
    let clothingData = store.getState().clothing;
    const fetchClothingData = () => {
        fetch(`http://localhost:4000/products/clothings`).then((res) => { return res.json() }).then((data) => {
            dispatch({
                type: "clothing",
                payload: data
            })
        })
    }
    if (clothingData.length == 0) {
        fetchClothingData();
    }
}

export const footwearAction = (dispatch) => {
    let footwearData = store.getState().footwear;
    const fetchFootwearData = () => {
        fetch(`http://localhost:4000/products/footwears`).then((res) => { return res.json() }).then((data) => {
            dispatch({
                type: "footwear",
                payload: data
            })
        })
    }
    if (footwearData.length == 0) {
        fetchFootwearData();
    }
}


export const innerwearAction = (dispatch) => {
    let innerwearData = store.getState().innerwear;
    const fetchInnerwearData = () => {
        fetch(`http://localhost:4000/products/innerwears`).then((res) => { return res.json() }).then((data) => {
            dispatch({
                type: "innerwear",
                payload: data
            })
        })
    }
    if (innerwearData.length == 0) {
        fetchInnerwearData();
    }
}

export const cartAction = (data, dispatch) => {
    let cartData = store.getState().cart;
    let bool = false;
    cartData.map((el, ind) => {
        if (el._id == data._id && el.size==data.size) {
            el.quantity = el.quantity + 1;
            bool = true;
        }
    })
    if (bool) {
        dispatch({
            type: "cart",
            payload: [...cartData]
        })
    } else {
        dispatch({
            type: "cart",
            payload: [...cartData, data]
        })
    }
}

export const finalAmountAction=(data,dispatch)=>{
    dispatch({
        type:"finalAmount",
        payload:data
    })
}
