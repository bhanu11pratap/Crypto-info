import { Avatar, Box, Stack, VStack , Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {

  return (

           <Box 
             bgColor={"gold"} 
             minH={"40"} 
             px={"16"} 
             py={["16","8"]}
           >

               <Stack 
                  direction={["column","row"]} 
                  h={"full"} 
                  alignItems={"center"}>

               <VStack 
                  w={"full"} 
                  alignItems={["center" , "flex-start"]}>

                <Text fontWeight={"bold"} color={"blackAlpha.900"}>About Crypto</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]} color={"blackAlpha.900"} >
                Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units.
                </Text>

                </VStack>

</Stack>
  </Box>
  )
}
