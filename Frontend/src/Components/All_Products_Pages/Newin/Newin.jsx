import React, { useEffect } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { thunkNewinAction } from '../../../Redux/Action/ThunkAction';
import { bindActionCreators } from 'redux';
export default function Newin() {
  let productData = useSelector((storeData) => storeData.newin);
  let dispatch = useDispatch();
  document.title = "Latest Mens Collection at JACK&JONES"
  useEffect(() => {
    let newinAction = bindActionCreators(thunkNewinAction, dispatch);
    newinAction();
  }, [])

  return (
    <Box maxW="97%" mx="auto">
      <h1 style={{ font: '24px', padding: "10px 10px 20px 0" }}>NEW IN  {productData.length > 1 ? <span style={{ color: 'gray' }}>{productData.length + 1}</span> : null}</h1>
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
