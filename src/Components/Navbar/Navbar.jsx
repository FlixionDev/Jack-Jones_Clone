import React from 'react'
import first_img from '../Navbar/images/JJ.webp'
import second_img from './images/Unmatched+Logo.webp'
import user_icon from "./images/user-icon.png"
import wishlist_icon from './images/wishlist.png'
import bags_icon from './images/bags.png'
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  Button,
  Portal
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: clothisOpen, onOpen: clothonOpen, onClose: clothonClose } = useDisclosure();
  const { isOpen: footisOPen, onOpen: footonOpen, onClose: footonClose } = useDisclosure();
  const { isOpen: accessisOPen, onOpen: accessonOpen, onClose: accessonClose } = useDisclosure();
  const { isOpen: innerisOPen, onOpen: inneronOpen, onClose: inneronClose } = useDisclosure();
  const { isOpen: loungeisOPen, onOpen: loungeonOpen, onClose: loungeonClose } = useDisclosure();
  const { isOpen: saleisOPen, onOpen: saleonOpen, onClose: saleonClose } = useDisclosure();
  const { isOpen: kidsisOPen, onOpen: kidsonOpen, onClose: kidsonClose } = useDisclosure();
  return (
    <div className={style.NavbarDiv}>
      <div className={style.NavbarUpperSection}>
        <div>
          <Link to='/'><img style={{ width: '150px' }} src={first_img} /></Link>
        </div>
        <div className={style.NavbarUpperSectionRightPart}>
          <div>
            <img style={{ width: '150px' }} src={second_img} />
          </div>
          <div style={{ border: "1px solid black", height: "50%", display: 'flex' }}>
            <input style={{ fontSize: "18px", padding: "10px 7px", border: "none", outline: "none" }} type='search' placeholder='search' />
            <SearchIcon style={{ margin: "15px" }} />
          </div>
          <div>
            <Menu>
              <MenuButton>
                <img style={{ backgroundColor: "white", width: "30px", margin: "25%" }} src={user_icon} alt="user icon" />
              </MenuButton>
              <Portal>
                <MenuList>
                  <Link to='/register'><MenuItem fontSize={13}>Register</MenuItem></Link>
                  <Link to='/login'><MenuItem fontSize={13}>Login</MenuItem></Link>
                </MenuList>
              </Portal>
            </Menu>

          </div>
          <div>
            <img style={{ width: '30px', margin: "25%" }} src={wishlist_icon} alt="wishlist icon" />
          </div>
          <div>
            <img style={{ width: '30px', margin: "25%" }} src={bags_icon} alt="bag icon" />
          </div>

        </div>
      </div>
      <div style={{ border: "1px solid gray", padding: "5px" }}>
        <div className={style.menulistDiv}>
          <Menu isOpen={isOpen}>
            <Link to='/newin'><MenuButton
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              NEW-IN{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList m={-2} onMouseEnter={onOpen} onMouseLeave={onClose}>
              <Link to='#'><MenuItem>T-SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>JEANS</MenuItem></Link>
              <Link to='#'><MenuItem>SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>FOOTWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>JACKETS</MenuItem></Link>
              <Link to='#'><MenuItem>TAILORINGS</MenuItem></Link>
              <Link to='#'><MenuItem>ATHLEISURE</MenuItem></Link>
              <Link to='#'><MenuItem>INNERWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>LOUNGEWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>BOTTOMWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>WINTERWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>ACCESSORIES</MenuItem></Link>
              <Link to='#'><MenuItem>KIDS</MenuItem></Link>
            </MenuList>
          </Menu>
          <Menu isOpen={clothisOpen}>
            <Link to='/clothings'><MenuButton
              onMouseEnter={clothonOpen}
              onMouseLeave={clothonClose}
            >
              CLOTHING{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList m={-2} onMouseEnter={clothonOpen} onMouseLeave={clothonClose}>
              <Link to='#'><MenuItem>T-SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>JEANS</MenuItem></Link>
              <Link to='#'><MenuItem>SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>JACKETS</MenuItem></Link>
              <Link to='#'><MenuItem>TAILORINGS</MenuItem></Link>
              <Link to='#'><MenuItem>ATHLEISURE</MenuItem></Link>
              <Link to='#'><MenuItem>INNERWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>LOUNGEWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>BOTTOMWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>CO-ORD SETS</MenuItem></Link>
              <Link to='#'><MenuItem>WINTERWEAR</MenuItem></Link>
            </MenuList>
          </Menu>
          <Menu isOpen={footisOPen}>
            <Link to='/footwears'><MenuButton
              onMouseEnter={footonOpen}
              onMouseLeave={footonClose}
            >
              FOOTWEAR{footisOPen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList m={-2} onMouseEnter={footonOpen} onMouseLeave={footonClose}>
              <Link to='#'><MenuItem>BOOTS</MenuItem></Link>
              <Link to='#'><MenuItem>FLIP FLOP</MenuItem></Link>
              <Link to='#'><MenuItem>SNEAKERS</MenuItem></Link>
              <Link to='#'><MenuItem>SANDALS</MenuItem></Link>
            </MenuList>
          </Menu>
          <Menu isOpen={accessisOPen}>
            <Link to='/accessories'><MenuButton
              onMouseEnter={accessonOpen}
              onMouseLeave={accessonClose}
            >
              ACCESSORIES{accessisOPen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList m={-2} onMouseEnter={accessonOpen} onMouseLeave={accessonClose}>
              <Link to='#'><MenuItem>BELTS</MenuItem></Link>
              <Link to='#'><MenuItem>CAPS</MenuItem></Link>
              <Link to='#'><MenuItem>GLOVES</MenuItem></Link>
              <Link to='#'><MenuItem>SCARVES</MenuItem></Link>
              <Link to='#'><MenuItem>SOCKS</MenuItem></Link>
              <Link to='#'><MenuItem>FRAGRANCES</MenuItem></Link>
              <Link to='#'><MenuItem>SUNGLASSES</MenuItem></Link>
              <Link to='#'><MenuItem>BEANIE</MenuItem></Link>
              <Link to='#'><MenuItem>MENS BACKPACKS</MenuItem></Link>
              <Link to='#'><MenuItem>MENS WALLETS</MenuItem></Link>
              <Link to='#'><MenuItem>MASKS</MenuItem></Link>
            </MenuList>
          </Menu>
          <Menu isOpen={innerisOPen}>
            <Link to='/innerwears'><MenuButton
              onMouseEnter={inneronOpen}
              onMouseLeave={inneronClose}
            >
              INNERWEAR{innerisOPen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList m={-2} onMouseEnter={inneronOpen} onMouseLeave={inneronClose}>
              <Link to='#'><MenuItem>BRIEF</MenuItem></Link>
              <Link to='#'><MenuItem>BOXERS</MenuItem></Link>
              <Link to='#'><MenuItem>SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>TRUNKS</MenuItem></Link>
              <Link to='#'><MenuItem>VESTS</MenuItem></Link>
            </MenuList>
          </Menu>
          <Menu isOpen={loungeisOPen}>
            <Link to='/loungewears'><MenuButton
              onMouseEnter={loungeonOpen}
              onMouseLeave={loungeonClose}
            >
              LOUNGEWEAR{loungeisOPen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList m={-2} onMouseEnter={loungeonOpen} onMouseLeave={loungeonClose}>
              <Link to='#'><MenuItem>FASHION VESTS</MenuItem></Link>
              <Link to='#'><MenuItem>PYJAMAS</MenuItem></Link>
              <Link to='#'><MenuItem>SLEEPWEAR</MenuItem></Link>
            </MenuList>
          </Menu>
          <Menu isOpen={saleisOPen}>
            <Link to='/sales'><MenuButton
              onMouseEnter={saleonOpen}
              onMouseLeave={saleonClose}
            >
              SALE{saleisOPen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList m={-2} onMouseEnter={saleonOpen} onMouseLeave={saleonClose}>
              <Link to='#'><MenuItem>T-SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>JEANS</MenuItem></Link>
              <Link to='#'><MenuItem>SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>FOOTWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>JACKETS</MenuItem></Link>
              <Link to='#'><MenuItem>TAILORINGS</MenuItem></Link>
              <Link to='#'><MenuItem>ATHLEISURE</MenuItem></Link>
              <Link to='#'><MenuItem>INNERWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>LOUNGEWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>BOTTOMWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>WINTERWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>ACCESSORIES</MenuItem></Link>
            </MenuList>
          </Menu>
          <Menu isOpen={kidsisOPen}>
            <Link to='/kids'><MenuButton
              onMouseEnter={kidsonOpen}
              onMouseLeave={kidsonClose}
            >
              KIDS{kidsisOPen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton></Link>
            <MenuList m={-2} onMouseEnter={kidsonOpen} onMouseLeave={kidsonClose}>
              <Link to='#'><MenuItem>JEANS</MenuItem></Link>
              <Link to='#'><MenuItem>T-SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>BOTTOMWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>ACCESSORIES</MenuItem></Link>
              <Link to='#'><MenuItem>SHIRTS</MenuItem></Link>
              <Link to='#'><MenuItem>JACKETS</MenuItem></Link>
              <Link to='#'><MenuItem>WINTERWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>ATHLEISURE</MenuItem></Link>
              <Link to='#'><MenuItem>INNERWEAR</MenuItem></Link>
              <Link to='#'><MenuItem>SLEEPWEAR</MenuItem></Link>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  )
}
