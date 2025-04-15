import React, { useEffect, useState } from 'react'
import { Box, SimpleGrid, Heading, Flex, Button, Image, Center } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import Carousel from './Carousel'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import r11 from './images/row_1_first.webp'
import r12 from './images/row_1_second.avif'
import r13 from './images/row_1_third.webp'
import tshirt from './images/t-shirtavif.avif'
import jean from './images/jeans.avif'
import shirt from './images/shirt.avif'
import denimjacket from './images/denimjacket.avif'
import innerwear from './images/innerwear.avif'
import cap from './images/cap.avif'
import sneaker from './images/sneaker.avif'
import jeanfit1 from './images/jeanfit1.webp'
import jeanfit2 from './images/jeanfit2.webp'
import jeanfit3 from './images/jeanfit3.webp'
import jeanfit4 from './images/jeanfit4.webp'
import jeanfit5 from './images/jeanfit5.webp'
import jeanfit6 from './images/jeanfit6.webp'
import ExploreMoreBrands1 from './images/ExploreMoreBrands1.avif'
import ExploreMoreBrands2 from './images/ExploreMoreBrands2.avif'
import ExploreMoreBrands3 from './images/ExploreMoreBrands3.avif'
import ExploreMoreBrands4 from './images/ExploreMoreBrands4.avif'
import ExploreMoreBrands5 from './images/ExploreMoreBrands5.avif'
import video1 from './videos/homemobdeskranveer.mp4'
import storeLocator from './images/storeLocator.avif'
import Insta from './images/Insta.avif'

export default function LandingPage() {
    document.title = "JackJones.in I Online Shopping for Latest in Shirts, T-shirts, Jeans and Jackets"
    let reduxdata = useSelector(storeData => storeData)
    let arr1 = [r11, r12, r13]
    let arr3 = [denimjacket, innerwear, cap, sneaker]
    let arr4 = [jeanfit1, jeanfit2, jeanfit3, jeanfit4, jeanfit5, jeanfit6]
    let arr5 = [ExploreMoreBrands1, ExploreMoreBrands2, ExploreMoreBrands3, ExploreMoreBrands4, ExploreMoreBrands5]
    const [jeanfit, setJeanfit] = useState(0)
    const [state, setState] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setState((prev) => (prev + 1) % arr1.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const imagesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 })
    const indices = Array.from({ length: imagesPerView }, (_, i) => (jeanfit + i) % arr4.length)

    return (
        <Box>
            <Box>
                <Image src={arr1[state]} w="100%" />
            </Box>
            <Carousel />

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="10px" mt="15px" px={4}>
                <Box><Image src={tshirt} w="100%" /></Box>
                <Box><Image src={jean} w="100%" /></Box>
                <Box><Image src={shirt} w="100%" /></Box>
            </SimpleGrid>

            {/* Four-Image Grid */}
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="16px" mt="30px" mx={4} justifyItems="center">
                {arr3.map((el, i) => (
                    <Box key={i}><Image src={el} w="100%" /></Box>
                ))}
            </SimpleGrid>

            {/* Jeans Fit Guide */}
            <Heading textAlign="center" mt="20px" fontSize={{ base: "24px", md: "38px" }}>JEANS FIT GUIDE</Heading>
            <Flex align="center" justify="center" mt="20px">
                <Button
                    onClick={() => setJeanfit((prev) => (prev - 1 + arr4.length) % arr4.length)}
                    fontSize={{ base: "24px", md: "40px" }}
                    variant="ghost"
                >
                    {'<'}
                </Button>
                <Flex wrap="wrap" justify="center">
                    {indices.map((index) => (
                        <Box
                            key={index}
                            w={{ base: "100%", md: "50%", lg: "33.33%" }}
                            p={2}
                        >
                            <Image src={arr4[index]} w="100%" />
                        </Box>
                    ))}
                </Flex>
                <Button
                    onClick={() => setJeanfit((prev) => (prev + 1) % arr4.length)}
                    fontSize={{ base: "24px", md: "40px" }}
                    variant="ghost"
                >
                    {'>'}
                </Button>
            </Flex>

            <Box bg="rgb(0,40,85)" mt="-7%" pb="15px">
                <Box w={{ base: "100%", md: "72%" }} mx="auto" pt={{ base: "13%" }}>
                    <ReactPlayer url={video1} width="100%" height="100%" controls />
                </Box>
            </Box>

            <Heading textAlign="center" mt="20px" fontSize={{ base: "24px", md: "38px" }}>
                Explore More Brands
            </Heading>
            <Flex columns={{ base: 1, sm: 2, md: 3 }} wrap="wrap" gap="16px" justifyContent="center" mt="20px">
                <Box><Image src={ExploreMoreBrands1} /></Box>
                <Box><Image src={ExploreMoreBrands2} /></Box>
                <Box><Image src={ExploreMoreBrands3} /></Box>
            </Flex>
            <Flex columns={{ base: 1, sm: 2 }} wrap="wrap" gap="16px" justifyContent="center" spacing="20px" mt="20px">
                <Box><Image src={ExploreMoreBrands4} /></Box>
                <Box><Image src={ExploreMoreBrands5} /></Box>
            </Flex>

            {/* Footer Section */}
            <Box borderTop="1px solid black" w={{ base: "90%", md: "70%" }} mx="auto" mt="30px" />
            <Flex
                justify="space-evenly"
                mt="20px"
                mb="20px"
                direction={{ base: "column", sm: "row" }}
                align="center"
                gap={{ base: "20px", sm: "0" }}
            >
                <Box w={{ base: "100%", sm: "45%" }}><Image src={storeLocator} margin={"auto"} /></Box>
                <Box w={{ base: "100%", sm: "45%" }}><Image src={Insta} margin={"auto"} /></Box>
            </Flex>
        </Box>
    )
}
