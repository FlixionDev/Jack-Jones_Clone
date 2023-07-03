export const thunkKidsAction=()=>{
    return (dispatch,getState)=>{
        let kidsData=getState().kids;
        const fetchKidsData=()=>{
            fetch(`https://curious-hare-jewelry.cyclic.app/kids`).then((res) => { return res.json() }).then((res) => { dispatch({
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
            fetch("https://curious-hare-jewelry.cyclic.app/loungewears").then((res)=>res.json()).then((res)=>{
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
            fetch("https://curious-hare-jewelry.cyclic.app/new_in").then((res)=>res.json()).then((res)=>{
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
            fetch("https://curious-hare-jewelry.cyclic.app/sales").then((res)=>res.json()).then((res)=>{
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
        let isLogin=JSON.parse(localStorage.getItem("isLogin")) || false;
        let userDetails=JSON.parse(localStorage.getItem("userDetails")) || [];
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
