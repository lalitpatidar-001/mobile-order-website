import axios from 'axios'

export const removeItemFromCart = async(cartId ,setRemoveMessage, modelName,removeMessage,isItemRemoved , setIsItemRemved,
    setIsCartItemRemoved,isCartItemRemoved
    )=>{

    try {
        const response = await axios.delete(`http://localhost:5000/api/cart/remove/${cartId}`);
        const data = response?.data;
        const status = response?.status;
        if(status === 200 && data?.cartDeleted===true){
            setRemoveMessage(`Cart Item ${modelName} deleted successfully`);
            setIsCartItemRemoved(!isCartItemRemoved)
            console.log(removeMessage)
        }

    } catch (error) {
        const data = error.response?.data
        if(error.response?.status === 404 && data?.msg==="cart not found"){
            setRemoveMessage(data?.msg)
        }else{
            setRemoveMessage(data?.msg)
        }
    }

}