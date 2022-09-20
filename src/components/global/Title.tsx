import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TitleType extends TextProps {
  children: ReactNode
}


export default function Title({ children, ...rest }: TitleType) {

  return (
    <Text mt='-4' fontSize='6xl' lineHeight='none' fontWeight='bold' {...rest}>
      {children}
    </Text>
  )
}