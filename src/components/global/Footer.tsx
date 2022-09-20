import { Flex, Text } from "@chakra-ui/react";



export default function Footer() {
  return (
    <Flex flexDirection='column' textAlign='center' bgColor='red.500' color='white'>
      <Text fontSize='xs'>Política de privacidade e termos de uso</Text>
      <Text fontSize='xs'>Fly Assessoria © 2022 - Todos os Direitos Reservados - CNPJ: 45.220.584/0001-49</Text>
    </Flex>
  )
}