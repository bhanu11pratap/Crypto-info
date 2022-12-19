import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"gold"}>
              <Button variant={"unstyled"} color={"blackAlpha.900"}>
                  <Link to="/">Home</Link>
              </Button>
              <Button variant={"unstyled"} color={"blackAlpha.900"}>
                  <Link to="/exchanges">Exchanges</Link>
              </Button>
              <Button variant={"unstyled"} color={"blackAlpha.900"}>
                  <Link to="/coins">Coins</Link>
              </Button>
   </HStack>
  )
}
