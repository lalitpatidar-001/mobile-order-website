import React, { useContext, useEffect, useState } from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { AddToCartButton, BuyNow, Container, GoToCartButton } from './style';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { userContext } from '../../../context/userContext';
import axios from 'axios';
import './style.css'
import { Link } from 'react-router-dom';
import { cartUpdateContext } from '../../../context/cartUpdateContext';

function Buttons({ specId,newRam,newRom, noCombination }) {
  const { isLoggedIn } = useContext(userContext);
  const { isItemAdded ,setIsItemAdded } = useContext(cartUpdateContext);
  const [isInCart, setIsInCart] = useState(false);
  console.log("noCombination ", noCombination);
  console.log("specId ->", specId);

  const addToCart = async (specId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/cart/add/${isLoggedIn._id}`, { specId });
      setIsInCart(true);
      setIsItemAdded(!isItemAdded)
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    async function getCartItem(specId) {
      try {
        const response = await axios.post(`http://localhost:5000/api/cart/get/${isLoggedIn._id}`, { specId });
        console.log(response.data);
        setIsInCart(response.data.isInCart)
      } catch (error) {
        if (error.response.status === 404 && error.response.data.msg === "not added to cart") {
          console.log(error.response.data)
          setIsInCart(false);
        }
        else {
          console.log(error)
        }
      }

    };
    getCartItem(specId);
  }, [specId,newRam,newRom])

  return (
    <>
      <Container>

        {isInCart && !noCombination ?
          <Link to={`/cart/${isLoggedIn._id}`}>
            <GoToCartButton><ShoppingCartOutlinedIcon />GO TO CART</GoToCartButton>
          </Link>
          :
          <button  className='btn2' onClick={() => addToCart(specId)}
          disabled={noCombination && true}
          style={{backgroundColor:noCombination ? "gray":""}}
          >
            <ShoppingCartOutlinedIcon />ADD TO CART </button>}


        <button className='btn_buy_now'
          style={{ background: "#FB641B" }}
          disabled={noCombination && true}
          style={{backgroundColor:noCombination ? "gray":"orange"}}
           ><LocalMallOutlinedIcon />Buy Now</button>
      </Container>
    </>
  )
}

export default Buttons