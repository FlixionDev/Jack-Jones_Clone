import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Flex, SimpleGrid, Image, Heading, Text, Button, Input, useToast, Divider, Icon } from '@chakra-ui/react';
import { FaTruck, FaUndo, FaCreditCard } from 'react-icons/fa';
import { cartAction } from '../../Redux/Action/Action';
import { accessoriesAction, clothingAction, footwearAction, innerwearAction } from '../../Redux/Action/Action';
import { thunkKidsAction, thunkLoungewearAction, thunkNewinAction, thunkSalesAction } from '../../Redux/Action/ThunkAction';
import { bindActionCreators } from 'redux';
import truck from '../../assets/delivery-truck.png';
import return_icon from '../../assets/return.png';
import hanger from '../../assets/hanger.png';

export default function ProductDescription() {
  const [state, setState] = useState([]);
  const [deliverable, setDeliverable] = useState({});
  const toast = useToast();
  const ref1 = useRef(null);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState('');
  const [size, setSize] = useState('S');
  const { pathname } = useLocation();
  const product = pathname.split('/');
  const productListData = useSelector((storeData) => storeData);

  useEffect(() => {
    window.scrollTo(0, 0);
    const category = product[1];
    const productId = product[2];

    const fetchProductData = (data, action) => {
      if (data.length === 0) {
        action(dispatch);
      } else {
        const productData = data.filter((el) => el._id === productId);
        setState(productData);
        if (productData.length > 0) {
          setSelectedImage(productData[0].first_img);
        }
      }
    };

    if (category === 'accessories') {
      fetchProductData(productListData.accessories, accessoriesAction);
    } else if (category === 'clothings') {
      fetchProductData(productListData.clothing, clothingAction);
    } else if (category === 'footwears') {
      fetchProductData(productListData.footwear, footwearAction);
    } else if (category === 'innerwears') {
      fetchProductData(productListData.innerwear, innerwearAction);
    } else if (category === 'kids') {
      if (productListData.kids.length === 0) {
        const kidsAction = bindActionCreators(thunkKidsAction, dispatch);
        kidsAction();
      } else {
        fetchProductData(productListData.kids);
      }
    } else if (category === 'loungewears') {
      if (productListData.loungewear.length === 0) {
        const loungewearAction = bindActionCreators(thunkLoungewearAction, dispatch);
        loungewearAction();
      } else {
        fetchProductData(productListData.loungewear);
      }
    } else if (category === 'new_in') {
      if (productListData.newin.length === 0) {
        const newinAction = bindActionCreators(thunkNewinAction, dispatch);
        newinAction();
      } else {
        fetchProductData(productListData.newin);
      }
    } else if (category === 'sales') {
      if (productListData.sales.length === 0) {
        const salesAction = bindActionCreators(thunkSalesAction, dispatch);
        salesAction();
      } else {
        fetchProductData(productListData.sales);
      }
    }
  }, [productListData]);

  const sendProductToCart = () => {
    if (state.length > 0) {
      cartAction({ ...state[0], quantity: 1, size }, dispatch);
      toast({ position: 'top', description: 'Product has been added to cart', status: 'success' });
    }
  };

  const checkPinCode = () => {
    const pincode = ref1.current.value;
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => res.json())
      .then((res) => {
        if (res[0].Status === 'Error') {
          toast({ position: 'top', description: 'Pincode not found', status: 'error', isClosable: true });
        } else {
          setDeliverable(res[0].PostOffice[0]);
        }
      });
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText('NEW100');
    toast({ position: 'top', description: 'Coupon has been copied', status: 'success', isClosable: true });
  };

  return (
    <Box maxW="container.xl" mx="auto" p={{ base: 2, md: 4 }}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
        {state.length > 0 && (
          <Flex flex="1" gap={4} direction={{ base: "column-reverse", sm: 'column-reverse', md: 'row' }}>
            <Flex direction={{ base: 'row', md: 'column' }} gap={2} mb={{ base: 4, md: 0 }}>
              <Image
                src={state[0].first_img}
                boxSize={{ base: '80px', md: '100px' }}
                objectFit="cover"
                border={selectedImage === state[0].first_img ? '2px solid black' : 'none'}
                cursor="pointer"
                onClick={() => setSelectedImage(state[0].first_img)}
              />
              <Image
                src={state[0].second_img}
                boxSize={{ base: '80px', md: '100px' }}
                objectFit="cover"
                border={selectedImage === state[0].second_img ? '2px solid black' : 'none'}
                cursor="pointer"
                onClick={() => setSelectedImage(state[0].second_img)}
              />
            </Flex>
            <Box>
              <Image src={selectedImage} w="100%" maxH="600px" objectFit="cover" />
            </Box>
          </Flex>
        )}

        <Box flex="1">
          <h1 style={{ fontSize: "22px", color: '#002855', marginBottom: '7px' }}>{state.length > 0 ? state[0].title : null}</h1>
          <Text fontWeight="bold" mt={2}>JACK & JONES</Text>
          <Text fontSize="xl" mt={2}>
            ₹ {state[0]?.price || 999}{' '}
            <Text as="span" fontWeight="bold" color="green.600" fontSize="sm">
              Inclusive of all taxes
            </Text>
          </Text>

          <Text mt={4}>Select size</Text>
          <Flex wrap="wrap" gap={2} mt={2}>
            {['S', 'M', 'L', 'XL', 'XXL'].map((s) => (
              <Box
                key={s}
                p={2}
                border="1px solid gray"
                cursor="pointer"
                bg={size === s ? '#002855' : 'white'}
                color={size === s ? 'white' : 'black'}
                onClick={() => setSize(s)}
                textAlign="center"
                w="50px"
              >
                {s}
              </Box>
            ))}
          </Flex>

          <Text mt={4} fontWeight="bold">BEST OFFERS</Text>
          <Divider borderColor="red.500" />
          <Text fontWeight="bold" color="#444">Get Rs.100 OFF on your first purchase! Use Code:</Text>
          <Flex align="center" mt={2}>
            <Box border="1px dotted red" p={2} borderRadius="25px">NEW100</Box>
            <Button variant="link" color="red" ml={4} onClick={copyCouponCode}>
              Tap to copy
            </Button>
          </Flex>

          <Button
            colorScheme="blue"
            size="lg"
            w={{ base: 'full', md: '60%' }}
            mt={4}
            onClick={sendProductToCart}
          >
            ADD TO CART
          </Button>

          <Box mt={4}>
            <Text color="#002855">CHECK PINCODE FOR DELIVERY</Text>
            <Flex mt={2}>
              <Input ref={ref1} placeholder="Enter your Pincode" />
              <Button ml={2} colorScheme="blue" onClick={checkPinCode}>
                Check
              </Button>
            </Flex>
            {deliverable.Name && (
              <Text mt={2}>
                This Product will get Deliver in 3 days in{' '}
                <Text as="span" color="red">{deliverable.Name}</Text>
              </Text>
            )}
          </Box>

          <Box mt={4}>
            <Flex align="center" mb={2}>
              <Icon as={FaTruck} mr={2} />
              <Text>Free shipping</Text>
            </Flex>
            <Flex align="center" mb={2}>
              <Icon as={FaUndo} mr={2} />
              <Text>Shop worry-free with our easy return policy</Text>
            </Flex>
            <Flex align="center" mb={2}>
              <Icon as={FaCreditCard} mr={2} />
              <Text>Check out easily with our multiple payment options</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* Bottom Section */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={8}>
        <Box textAlign="center">
          <Image src={truck} boxSize="40px" mx="auto" />
          <Text>FREE SHIPPING</Text>
        </Box>
        <Box textAlign="center">
          <Image src={return_icon} boxSize="40px" mx="auto" />
          <Text>EASY RETURNS</Text>
        </Box>
        <Box textAlign="center">
          <Image src={hanger} boxSize="40px" mx="auto" />
          <Text>SEVERAL SECURE PAYMENT OPTIONS</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
