import React, { useState, useEffect } from 'react'
import { Box, Image } from '@chakra-ui/react'
import r21 from './images/row_2_first.avif'
import r22 from './images/row_2_secondavif.avif'
import r23 from './images/row_2_third.webp'

export default function Carousel() {
    let arr2 = [r21, r22, r23]
    const [state, setState] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setState((prev) => (prev + 1) % arr2.length)
        }, 3500)
        return () => clearInterval(timer)
    }, [])

    return (
        <Box mt="15px">
            <Image src={arr2[state]} w="100%" />
        </Box>
    )
}
