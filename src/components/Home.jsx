import { Box , Image , Text} from '@chakra-ui/react'
import React from 'react'
import {motion} from "framer-motion"
import btcSrc from "../logo/bitcoinLogo.png";


export default function Home() {
  return (

          <Box bgColor={"blackAlpha.900"} w={"full"} h={"calc(100vh - 72px)"}>

               <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} />
              
               <Text 
                  fontSize={"6xl"} 
                  textAlign={"center"} 
                  fontWeight={"thin"} 
                  color={"gold"} 
                  mt={"-20"}
                  >
                  CRYPTO
                </Text>
          </Box>
  )
}
