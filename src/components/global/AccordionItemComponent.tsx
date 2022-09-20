import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from "@chakra-ui/react";

interface AccordionItemComponentProps {
  Question: string,
  Response: string
}


export default function AccordionItemComponent({ Question, Response }: AccordionItemComponentProps) {

  return (
    <AccordionItem>
      <AccordionButton display='flex' justifyContent='space-between'>
        <Text p='2' fontSize='3xl' fontWeight='bold' color='white'>{Question}</Text>
        <AccordionIcon fontSize={30} color='white' />
      </AccordionButton>
      <AccordionPanel textAlign='start' color='white'>
        {Response}
      </AccordionPanel>
    </AccordionItem>
  )
}