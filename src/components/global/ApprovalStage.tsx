import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Title from "./Title";

interface ApprovalStageProps {
  PathImage: any,
  TitleStage: string
  DescriptionStage: string,
}

export default function ApprovalStage({ PathImage, TitleStage, DescriptionStage }: ApprovalStageProps) {
  return (
    <Flex flexDirection='column'>
      <Box>
        <Image src={PathImage} alt="image" />
      </Box>

      <Flex flexDirection='column' textAlign='center' my='10'>
        <Title as='h3' fontSize='2xl' color='white'>{TitleStage}</Title>
        <Text color='white'>{DescriptionStage}</Text>
      </Flex>
    </Flex>
  )
}
