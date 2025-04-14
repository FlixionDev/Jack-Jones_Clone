import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  useToast
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { thunkUserLoginDone } from '../../Redux/Action/ThunkAction';
import { bindActionCreators } from 'redux';

import first_img from '../Navbar/images/JJ.webp';
import second_img from './images/Unmatched+Logo.webp';
import user_icon from "./images/user-icon.png";
import wishlist_icon from './images/wishlist.png';
import bags_icon from './images/bags.png';

export default function Navbar() {
  const userdataIsLogin = useSelector((storeData) => storeData.isLogin);
  const dispatch = useDispatch();
  const toast = useToast();

  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const LogoutUserFunc = () => {
    let isLoginAction = bindActionCreators(thunkUserLoginDone, dispatch);
    sessionStorage.setItem("isLogin", false);
    sessionStorage.removeItem("userDetails");
    isLoginAction();
    toast({ position: "top", description: 'Logout successfully!', status: "success", isClosable: true });
  };

  return (
    <>
      <Box bg="white" position="sticky" top={0} p={4} >
        <Flex justify="space-between" align="center" flexWrap="wrap">
          <Flex align="center" justify="space-between" w="100%" mb={{ base: 2, md: 0 }}>
            {isMobile && (<Link to="/">
              <img style={{ width: '150px' }} src={first_img} />
            </Link>)
            }
            {isMobile && (
              <IconButton
                icon={<HamburgerIcon />}
                onClick={onDrawerOpen}
                variant="outline"
                aria-label="Open menu"
              />
            )}
          </Flex>

          {!isMobile && (
            <Flex gap={4} align="center" w="100%" >
              <Link to="/">
                <img style={{ width: '150px' }} src={first_img} />
              </Link>
              <Flex gap={4} align="center" justifyContent={"end"} w="100%">
                <img style={{ width: '150px' }} src={second_img} />
                <InputGroup maxW="300px">
                  <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
                  <Input type="search" placeholder="Search" fontSize="16px" />
                </InputGroup>

                <Flex gap={4} align="center">
                  <Menu>
                    <MenuButton style={{ minWidth: '30px', maxWidth: "30px" }}>
                      <img style={{ backgroundColor: "white", width: "30px" }} src={user_icon} alt="user icon" />
                    </MenuButton>
                    <Portal>
                      {!userdataIsLogin ? (
                        <MenuList>
                          <Link to="/register"><MenuItem fontSize={13}>Register</MenuItem></Link>
                          <Link to="/login"><MenuItem fontSize={13}>Login</MenuItem></Link>
                        </MenuList>
                      ) : (
                        <MenuList>
                          <MenuItem fontSize={13} onClick={LogoutUserFunc}>Log-out</MenuItem>
                        </MenuList>
                      )}
                    </Portal>
                  </Menu>
                  <img style={{ width: '30px' }} src={wishlist_icon} alt="wishlist icon" />
                  <Link to="/cart" style={{ minWidth: '30px', maxWidth: "30px" }}>
                    <img src={bags_icon} alt="bag icon" />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Box>

      {/* Desktop Menus with Dropdowns */}
      {!isMobile && (
        <Flex justify="center" border={'1px solid black'} py={2} gap={6} fontSize="13px" wrap="wrap">
          <DropdownMenu label="NEW-IN" to="/new_in">
            <DropdownItem to="#">T-SHIRTS</DropdownItem>
            <DropdownItem to="#">JEANS</DropdownItem>
            <DropdownItem to="#">SHIRTS</DropdownItem>
            <DropdownItem to="#">FOOTWEAR</DropdownItem>
            <DropdownItem to="#">JACKETS</DropdownItem>
            <DropdownItem to="#">ATHLEISURE</DropdownItem>
            <DropdownItem to="#">INNERWEAR</DropdownItem>
            <DropdownItem to="#">LOUNGEWEAR</DropdownItem>
            <DropdownItem to="#">WINTERWEAR</DropdownItem>
            <DropdownItem to="#">ACCESSORIES</DropdownItem>
            <DropdownItem to="#">KIDS</DropdownItem>
          </DropdownMenu>

          <DropdownMenu label="CLOTHING" to="/clothings">
            <DropdownItem to="#">T-SHIRTS</DropdownItem>
            <DropdownItem to="#">JEANS</DropdownItem>
            <DropdownItem to="#">SHIRTS</DropdownItem>
            <DropdownItem to="#">JACKETS</DropdownItem>
            <DropdownItem to="#">ATHLEISURE</DropdownItem>
            <DropdownItem to="#">INNERWEAR</DropdownItem>
            <DropdownItem to="#">LOUNGEWEAR</DropdownItem>
            <DropdownItem to="#">WINTERWEAR</DropdownItem>
          </DropdownMenu>

          <DropdownMenu label="FOOTWEAR" to="/footwears">
            <DropdownItem to="#">BOOTS</DropdownItem>
            <DropdownItem to="#">FLIP FLOP</DropdownItem>
            <DropdownItem to="#">SNEAKERS</DropdownItem>
            <DropdownItem to="#">SANDALS</DropdownItem>
          </DropdownMenu>

          <DropdownMenu label="ACCESSORIES" to="/accessories">
            <DropdownItem to="#">BELTS</DropdownItem>
            <DropdownItem to="#">CAPS</DropdownItem>
            <DropdownItem to="#">GLOVES</DropdownItem>
            <DropdownItem to="#">SCARVES</DropdownItem>
            <DropdownItem to="#">SOCKS</DropdownItem>
            <DropdownItem to="#">FRAGRANCES</DropdownItem>
            <DropdownItem to="#">SUNGLASSES</DropdownItem>
            <DropdownItem to="#">BEANIE</DropdownItem>
            <DropdownItem to="#">BACKPACKS</DropdownItem>
          </DropdownMenu>

          <DropdownMenu label="INNERWEAR" to="/innerwears">
            <DropdownItem to="#">BRIEF</DropdownItem>
            <DropdownItem to="#">BOXERS</DropdownItem>
            <DropdownItem to="#">SHIRTS</DropdownItem>
            <DropdownItem to="#">TRUNKS</DropdownItem>
            <DropdownItem to="#">VESTS</DropdownItem>
          </DropdownMenu>

          <DropdownMenu label="LOUNGEWEAR" to="/loungewears">
            <DropdownItem to="#">FASHION VESTS</DropdownItem>
            <DropdownItem to="#">PYJAMAS</DropdownItem>
            <DropdownItem to="#">SLEEPWEAR</DropdownItem>
          </DropdownMenu>

          <DropdownMenu label="SALE" to="/sales">
            <DropdownItem to="#">T-SHIRTS</DropdownItem>
            <DropdownItem to="#">JEANS</DropdownItem>
            <DropdownItem to="#">SHIRTS</DropdownItem>
            <DropdownItem to="#">FOOTWEAR</DropdownItem>
            <DropdownItem to="#">JACKETS</DropdownItem>
            <DropdownItem to="#">ATHLEISURE</DropdownItem>
            <DropdownItem to="#">INNERWEAR</DropdownItem>
            <DropdownItem to="#">LOUNGEWEAR</DropdownItem>
            <DropdownItem to="#">WINTERWEAR</DropdownItem>
          </DropdownMenu>

          <DropdownMenu label="KIDS" to="/kids">
            <DropdownItem to="#">T-SHIRTS</DropdownItem>
            <DropdownItem to="#">JEANS</DropdownItem>
            <DropdownItem to="#">BOTTOMWEAR</DropdownItem>
            <DropdownItem to="#">ACCESSORIES</DropdownItem>
          </DropdownMenu>
        </Flex>
      )}

      <Drawer placement="left" onClose={onDrawerClose} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Flex direction="column" gap={4} fontWeight="bold">
              <Link to="/new_in" onClick={onDrawerClose}>NEW-IN</Link>
              <Link to="/clothings" onClick={onDrawerClose}>CLOTHING</Link>
              <Link to="/footwears" onClick={onDrawerClose}>FOOTWEAR</Link>
              <Link to="/accessories" onClick={onDrawerClose}>ACCESSORIES</Link>
              <Link to='/innerwears' onClick={onDrawerClose}> INNERWEAR</Link>
              <Link to='/loungewears' onClick={onDrawerClose}>LOUNGEWEAR</Link>
              <Link to="/sales" onClick={onDrawerClose}>SALE</Link>
              <Link to="/kids" onClick={onDrawerClose}>KIDS</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// Reusable Dropdown Menu
const DropdownMenu = ({ label, to, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <Link to={to}>
        <MenuButton
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize="13px"
          fontWeight="normal"
        >
          {label} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
      </Link>
      <MenuList>
        {children}
      </MenuList>
    </Menu>
  );
};

// Dropdown Item
const DropdownItem = ({ to, children }) => (
  <Link to={to}>
    <MenuItem fontSize={13}>{children}</MenuItem>
  </Link>
);
