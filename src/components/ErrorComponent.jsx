import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

export default function ErrorComponent(props) {
  return (
    <Alert 
    status='error' 
    position={"fixed"} 
    bottom={"4"} 
    left={"50% "} 
    transform={"translatex(-50%)"} 
    w={"container.lg"}
    justifyContent={"center"}>
      <AlertIcon />
      {props.message}
    </Alert>
  )
}

