let initialData={
    accessories:[],
    clothing:[],
    footwear:[],
    innerwear:[],
    kids:[],
    loungewear:[],
    newin:[],
    sales:[],
    cart:JSON.parse(sessionStorage.getItem("cart")) || [],
    isLogin:sessionStorage.getItem("isLogin") || false,
    userDetails:JSON.parse(localStorage.getItem("userDetails")) || [],
    finalAmount:0,
}
export const Reducer=(storeData=initialData,action)=>{
    switch(action.type){
        case 'accessories':{
            return {
                ...storeData,
                accessories:action.payload
            }
        }
        case 'clothing':{
            return {
                ...storeData,
                clothing:action.payload
            }
        }
        case 'footwear':{
            return {
                ...storeData,
                footwear:action.payload
            }
        }
        case 'innerwear':{
            return{
                ...storeData,
                innerwear:action.payload
            }
        }
        case 'kids':{
            return{
                ...storeData,
                kids:action.payload
            }
        }
        case 'loungewear':{
            return{
                ...storeData,
                loungewear:action.payload
            }
        }
        case 'newin':{
            return{
                ...storeData,
                newin:action.payload
            }
        }
        case 'sales':{
            return {
                ...storeData,
                sales:action.payload
            }
        }
        case 'isLogin':{
            return {
                ...storeData,
                isLogin:action.payload
            }
        }
        case "userDetails":{
            return{
                ...storeData,
                userDetails:action.payload
            }
        }
        case 'cart':{
            return{
                ...storeData,
                cart:action.payload
            }
        }
        case 'finalAmount':{
            return {
                ...storeData,
                finalAmount:action.payload
            }
        }
    }
    return storeData;
}