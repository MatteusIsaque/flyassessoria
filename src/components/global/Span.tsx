import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SpanProps extends TextProps {
  children: ReactNode
}

export default function Span({ children, ...rest }: SpanProps) {

  return (
    <Text as='span' fontSize='3xl' fontWeight='semibold' color='red.600' {...rest} >
      {children}
    </Text>
  )
}