import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonType extends ButtonProps {
  Text: string
}

export default function ButtonCompont({ Text, ...rest }: ButtonType) {

  return (
    <Button bgColor='red.500' px={{base: '10', md:'20'}} fontWeight='bold' py='6' fontSize={{base:'1xl', md:'2xl'}} _hover={{backgroundColor: 'red.600'}} mt='4' color='white' {...rest}>
      {Text}
    </Button>
  )
}