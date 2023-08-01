export const thunkKidsAction=()=>{
    return (dispatch,getState)=>{
        let kidsData=getState().kids;
        const fetchKidsData=()=>{
            fetch(`https://glamorous-ring-newt.cyclic.app/products/kids`).then((res) => { return res.json() }).then((res) => { dispatch({
                type:"kids",
                payload:res
            }) })
        }
        if(kidsData.length==0){
            fetchKidsData();
        }

    }
}

export const thunkLoungewearAction=()=>{
    return (dispatch,getState)=>{
        let loungewearData=getState().loungewear;
        const fetchloungewearData=()=>{
            fetch("https://glamorous-ring-newt.cyclic.app/products/loungewears").then((res)=>res.json()).then((res)=>{
                dispatch({
                    type:"loungewear",
                    payload:res
                })
            })
        }
        if(loungewearData.length==0){
            fetchloungewearData();
        }
    }
}


export const thunkNewinAction=()=>{
    return (dispatch,getState)=>{
        let newinData=getState().newin;
        const fetchnewinData=()=>{
            fetch("https://glamorous-ring-newt.cyclic.app/products/new_ins").then((res)=>res.json()).then((res)=>{
                dispatch({
                    type:"newin",
                    payload:res
                })
            })
        }
        if(newinData.length==0){
            fetchnewinData();
        }
    }
}

export const thunkSalesAction=()=>{
    return (dispatch,getState)=>{
        let salesData=getState().sales;
        const fetchSalesData=()=>{
            fetch("https://glamorous-ring-newt.cyclic.app/products/sales").then((res)=>res.json()).then((res)=>{
                dispatch({
                    type:"sales",
                    payload:res
                })
            })
        }
        if(salesData.length == 0){
            fetchSalesData();
        }
    }
}


export const thunkUserLoginDone=()=>{
    return (dispatch,getState)=>{
        let isLogin=JSON.parse(sessionStorage.getItem("isLogin")) || false;
        let userDetails=JSON.parse(sessionStorage.getItem("userDetails")) || [];
        dispatch({
            type:"isLogin",
            payload:isLogin
        })
        dispatch({
            type:"userDetails",
            payload:userDetails
        })
    }
}


export const deleteCartProduct=(ind)=>{
    return (dispatch,getState)=>{
        let cartData=getState().cart;
        cartData.splice(ind,1);
        dispatch({
            type:"cart",
            payload:[...cartData]
        })
    }
}