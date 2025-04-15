import React, { useEffect } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { thunkKidsAction } from '../../../Redux/Action/ThunkAction';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
export default function Kids() {
  const dispatch = useDispatch();
  let productData = useSelector((storeData) => storeData.kids)
  document.title = "Jack & Jones"
  useEffect(() => {
    let actionThunk = bindActionCreators(thunkKidsAction, dispatch)
    actionThunk();
  }, [])

  return (
    <Box maxW="97%" mx="auto">
      <h1 style={{ font: '24px', padding: "10px 10px 20px 0" }}>KIDS CLOTHES  {productData.length > 1 ? <span style={{ color: 'gray' }}>{productData.length + 1}</span> : null}</h1>
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
