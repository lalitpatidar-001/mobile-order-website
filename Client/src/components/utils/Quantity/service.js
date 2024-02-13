import axios from 'axios'

export  async function increaseQuantity(cartId ,quantity , setIsLoading,setQuantity,setMessage,message,isQuantityUpdated ,setIsQuantityUpdated){
    try{
        setIsLoading(true)
        const response = await axios.post(`http://localhost:5000/api/quantity/increase/${cartId}`);
        console.log(response);
        if(response.status===200 && response.data.isIncreased===true){
            setQuantity(response.data.quantity);
            setMessage("quantity increased , now ",quantity);
            setIsQuantityUpdated(!isQuantityUpdated)
            console.log("message ",message);
        }
        
    }catch(error){
        console.log(error);
        if(error.response.status === 422 && error.response.data.isIncreased===false){
            setMessage("can not purshase more than 5 quantity in one order")
        }
        else if(error.response.status === 404 && error.response.data.msg ==="cart not found" ){
            setMessage(error.response.data.msg);
        }
        else{
            setMessage(error.response.data.msg);
        }
    }finally{
        setIsLoading(false)
    }
}


export  async function decreaseQuantity(cartId ,quantity , setIsLoading,setQuantity,setMessage,message,isQuantityUpdated ,setIsQuantityUpdated){
    try{
        setIsLoading(true)
        const response = await axios.post(`http://localhost:5000/api/quantity/decrease/${cartId}`);
        console.log(response);
        if(response.status===200 && response.data.isDecreased===true){
            setQuantity(response.data.quantity);
            setMessage("quantity decreased , now ",quantity)
            setIsQuantityUpdated(!isQuantityUpdated)
            console.log("message ",message);
        }
        
    }catch(error){
        console.log(error);
        if(error.response.status === 422 && error.response.data.isDecreased===false){
            setMessage("can not purshase more than 5 quantity in one order")
        }
        else if(error.response.status === 404 && error.response.data.msg ==="cart not found" ){
            setMessage(error.response.data.msg);
        }
        else{
            setMessage(error.response.data.msg);
        }
    }finally{
        setIsLoading(false)
    }
}