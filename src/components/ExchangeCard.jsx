
import React from 'react'
import {
    Heading,
    Image,
    Text,
    VStack,
  } from "@chakra-ui/react";
export default function ExchangeCard(props) {
  return (
    <a href={props.url} target={"blank"}>

  <VStack 
      w={"52"} 
      shadow={"lg"} 
      p={"8"} 
      borderRadius={"lg"} 
      transition={"all 0.3s"} 
      m={"4"} 
      css={{"&:hover":{
        transform:"scale(1.1"
          }
        }}
      >

    <Image 
        src={props.img} 
        w={"10"} 
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
        />

        <Heading size={"md"} noOfLines={1}>{props.rank}</Heading>
        <Text noOfLines={1}>{props.name}</Text>
  </VStack>

    </a>
  )
}
