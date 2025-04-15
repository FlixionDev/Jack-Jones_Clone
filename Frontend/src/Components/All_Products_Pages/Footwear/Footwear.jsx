import React, { useEffect } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { footwearAction } from '../../../Redux/Action/Action';
export default function Footwear() {
  let productData = useSelector((storeData) => storeData.footwear);
  const dispatch = useDispatch();
  document.title = "Buy Footwear & Shoes for Men Online in India"
  useEffect(() => {
    footwearAction(dispatch)
  }, [])

  return (
    <Box maxW="97%" mx="auto">
      <h1 style={{ font: '24px', padding: "10px 10px 20px 0" }}>FOOTWEAR AND SHOES FOR MEN  {productData.length > 1 ? <span style={{ color: 'gray' }}>{productData.length + 1}</span> : null}</h1>
      {productData.length > 0 && (
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={{ base: 4, md: 6 }}
        >
          {productData.map((el, i) => (
            <Box key={i + 1}>
              <ProductCard {...el} />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}
