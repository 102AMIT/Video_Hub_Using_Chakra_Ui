import { Box, Container, Heading ,Image, Stack,Text} from '@chakra-ui/react';
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.png"

const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:'4',
    size:"3xl"
}



const Home = () => {
   
  return (
    <Box>
    <MyCarousel />

    <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>Services</Heading>
        <Stack h={"full"} p={"4"} alignItems={"center"} direction={['column','row']}>
            <Image src={img5} filter={"hue-rotate(-130deg)"} h={['60','600']} />

            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"left"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam doloremque itaque cum, excepturi quam nihil quae, velit blanditiis aut esse similique eveniet, id mollitia commodi. Laborum quia alias maxime.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur rerum, voluptatum quaerat explicabo ab ipsam, animi corrupti laboriosam quae officiis accusantium laborum temporibus, magni natus impedit eum sapiente quos!
            </Text>
        </Stack>
    </Container>
    </Box>
  );
}

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h={'100vh'}>
            <Image src={img1} h={'95vh'} />
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img2} h={'95vh'}/>
            <Heading bgColor={"whiteAlpha.300"} color={'black'} {...headingOptions}>
                Gaming On Console
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img3} h={'95vh'}/>
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>             
                Future is Gaming
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>
                Let's Play Together
            </Heading>
        </Box>

    </Carousel>
)

export default Home