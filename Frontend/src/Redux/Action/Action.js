import store from "../Store/Store"
export const accessoriesAction = (dispatch) => {
    let accessoriesData = store.getState().accessories;
    const fetchAccessoriesData = () => {
        fetch(`https://backendserverjackjones.onrender.com/products/accessories`).then((res) => { return res.json() }).then((data) => {
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
        fetch(`https://backendserverjackjones.onrender.com/products/clothings`).then((res) => { return res.json() }).then((data) => {
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
        fetch(`https://backendserverjackjones.onrender.com/products/footwears`).then((res) => { return res.json() }).then((data) => {
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
        fetch(`https://backendserverjackjones.onrender.com/products/innerwears`).then((res) => { return res.json() }).then((data) => {
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
    if(data.length === 0){
        dispatch({
            type:"cart",
            payload:data
        })
    }else{
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
            sessionStorage.setItem("cart",JSON.stringify([...cartData]))
        } else {
            dispatch({
                type: "cart",
                payload: [...cartData, data]
            })
            sessionStorage.setItem("cart",JSON.stringify([...cartData,data]))
        }
    }
    
}

export const finalAmountAction=(data,dispatch)=>{
    dispatch({
        type:"finalAmount",
        payload:data
    })
}
