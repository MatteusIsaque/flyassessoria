import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface InputFormProps extends InputProps {
  label: string,
  required?: boolean
}


export default function InputForm({ label, required, ...rest }: InputFormProps) {

  if (required) {
    return (
      <FormControl isRequired>
        <FormLabel>{label}</FormLabel>
        <Input {...rest} />
      </FormControl>
    )
  }

  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input />
      </FormControl>
    </>
  )
}