import { Box } from '@chakra-ui/react'
import React from 'react'

import Rows from '../component/Row/Row'

export default function Trending() {
  return (
    <Box backgroundColor={"black"}>
      
        <Rows title="ZEE5 ORIGINALS" isLargeRow/>
        <Rows title="Trending Now"  />
        <br/>
        <br/>
        <br/>
        <br/>
    </Box>
  )
}
