import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
export default function PrivateRoute({ children }) {
  let isLogin = useSelector((storeData) => storeData.isLogin);
  const toast=useToast();
  let navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      toast({ position:"top",description: 'Please login before go to the cart page !',status: "error",isClosable:true })
      navigate("/login");
    }
  })
  return (
    <div>
      {
        isLogin ? children : null
      }
    </div>
  )
}
