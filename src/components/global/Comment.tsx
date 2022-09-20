import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";

import { FaQuoteRight, FaStar } from 'react-icons/fa'

interface commentProps {
  ImageUser: any
  Commentary: string,
  Name: string,
  Profession: string,
}

export default function Comment({ ImageUser, Commentary, Name, Profession }: commentProps) {

  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='space-between' position='relative' flex='1' borderWidth='1px' h='600px' boxShadow='lg' p='10%'>
      <Icon position='absolute' as={FaQuoteRight} fontSize='4xl' top='-18px' left='40px' />

      <Box />

      <Text textAlign='center' fontSize='3xl' fontWeight='semibold'>
        {Commentary}
      </Text>

      <Grid gridTemplateColumns='40% 1fr' columnGap='5%'>
        <Box>
          <Image src={ImageUser} />
        </Box>

        <Flex flexDirection='column' alignSelf='center'>
          <Text fontWeight='bold' fontSize='1xl'>{Name}</Text>
          <Text color='gray.600'>{Profession}</Text>
          <Flex>
            <Icon as={FaStar} color='yellow.300' />
            <Icon as={FaStar} color='yellow.300' />
            <Icon as={FaStar} color='yellow.300' />
            <Icon as={FaStar} color='yellow.300' />
            <Icon as={FaStar} color='yellow.300' />
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  )
}