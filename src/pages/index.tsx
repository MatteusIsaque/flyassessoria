import { Accordion, Box, Checkbox, Divider, Fade, Flex, FormControl, FormLabel, Grid, Stack, Text, Textarea, useBreakpointValue, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { FormEvent, useEffect, useState } from 'react'
import ButtonCompont from '../components/global/Button'
import Comment from '../components/global/Comment'
import Span from '../components/global/Span'
import Title from './../components/global/Title'
import ApprovalStage from '../components/global/ApprovalStage'
import AccordionItemComponent from '../components/global/AccordionItemComponent'

import Elissandra from './../img/testemunho-fly-assessoria-1.png'
import Kelly from './../img/testemunho-fly-assessoria-2.png'
import Rogério from './../img/testemunho-fly-assessoria-3.png'

import Modelo from './../img/flyer.jpg'
import ModeloMobile from './../img/flyer-mobile.jpg'

import DocumentShipping from './../img/envio-de-documento.jpg'
import AnalyzeDocument from './../img/analisamos-documentos.jpg'
import RoutingForApproval from './../img/encaminhamento-para-aprovação.jpg'
import InputForm from '../components/form/Input'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'

import Wts from './../img/icons8-whatsapp-96.png'

export default function Index() {
  const [time, setTime] = useState<boolean>()
  const [name, setName] = useState("")
  const [number, setNumber] = useState(0)
  const [message, setMessage] = useState("")

  const [isLargerThan656] = useMediaQuery('(min-width:1280px)')

  useEffect(() => {
    setTimeout(() => { setTime(true) }, 1000)
  }, [])

  async function handleForm(e: FormEvent) {
    e.preventDefault()

    const a = await axios.post("https://main-form.herokuapp.com/form/send-form-campanha", {
      emailTo: "matteus.isaque28@gmail.com",
      // emailTo: "jcbbb86@gmail.com"
      domain: "https://flyassessoria-k4ficdbmq-matteusisaque.vercel.app/",
      title: "Campanha Isaques Estúdios",
      name: name,
      phone: number,
      message: message
    })

    console.log(a)
  }


  return (
    <>
      <Head>
        <title>Fly Assessoria - Assessoria Habitacional</title>
        <meta property='title' content='Assessoria habitacional' />
      </Head>
      <main>

        <Flex h='100%' flexDirection={{ base: 'column', lg: 'row' }} mt={{ base: '25px', sm: '50', md: '0px' }} alignItems='center' maxH='942px' py={{ base: '10%', lg: '0px' }} mb='-1' justifyContent='space-between'>
          <Box flex='1' maxW='1400px' ml={{ base: '0px', md: '10%' }} textAlign={{ base: 'center', md: 'start' }}>
            <Fade in={time} animate={{ opacity: 1 }}>
              <Span fontSize={{ base: '2xl', md: '3xl' }}>Conheça a Fly Assessoria</Span>
              <Title mt='1' as='h1' color='blue.800'>Conquiste sua casa própria, sem burocrácia e dor de cabeça</Title>
              <Link href="https://wa.me/5511991151492?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+aprova%C3%A7%C3%A3o+do+financiamento+im%C3%B3biliario.">
                <ButtonCompont Text='FALAR PELO WHATSAPP' />
              </Link>
            </Fade>
          </Box>

          <Box flex='1' maxW={{ base: '500', md: 'none' }} mx={{ base: '10%', md: '0' }}>
            {isLargerThan656 ? <Image src={Modelo} /> : <Image src={ModeloMobile} />}

          </Box>
        </Flex>

        <Divider />

        <Flex textAlign="center" flexDir="column" px="10%" justifyItems="center" py="28">
          <Text as="h2" mb={2} fontWeight={700} fontSize={32}>A FLY ASSESSORIA TE AJUDA A REALIZAR O SONHO DA CASA PRÓPRIA</Text>
          <Text as="p">A Fly Assessoria acredita que todos têm o direito à casa própria, por isso a Fly Assessoria está empenhada em possibilitar que todas as famílias, independentemente da renda, tenha o financiamento aprovado.</Text>
          <Text as="p">Basta ter um nome limpo e entrar em contato com um de nossos servidores e nós o ajudaremos ao durante o processo de aprovação.</Text>
        </Flex>

        <Box bgColor='red.500' py='5%' textAlign='center'>
          <Span color='white' py='10%'>Veja como é simples a aprovação do seu crédito</Span>
          <Grid mt='10' maxW='1400px' templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} columnGap='5%' mx='10%'>
            <ApprovalStage PathImage={DocumentShipping} TitleStage='Você envia seus documentos' DescriptionStage='Você envia seus documentos para nossa análise sem pagar nada!' />
            <ApprovalStage PathImage={AnalyzeDocument} TitleStage='Analisamos seus documentos' DescriptionStage='Seus documentos são analisados cuidadosamente' />
            <ApprovalStage PathImage={RoutingForApproval} TitleStage='Encaminhado para aprovação' DescriptionStage='Estando tudo certo, seus documentos são enviados para aprovar seu crédito.' />
          </Grid>

          <Flex justifyContent='center'>
            <Link href="https://wa.me/5511991151492?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+aprova%C3%A7%C3%A3o+do+financiamento+im%C3%B3biliario.">
              <ButtonCompont mx='10%' Text='FALE AGORA COM NOSSA EQUIPE' />
            </Link>
          </Flex>
        </Box>

        <Divider />

        <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} mb={{ base: '0px' }} rowGap={{ base: '5%', md: '0px' }} columnGap='5%' maxW='1400px' mx='10%' py='10%'>
          <Comment Commentary='Que a Fly cresça ainda mais, podendo ajudar mulheres que assim como eu, lutam para conquistar o sonho do seu imóvel.' ImageUser={Elissandra} Name='Elissandra' Profession='Advogada' />
          <Comment Commentary='...os profissionais que fizeram toda a diferença no processo... eles realmente sabem assessorar o cliente!' ImageUser={Kelly} Name='Kelly' Profession='Habitacional' />
          <Comment Commentary='...eles conseguirem aprovação do meu crédito, só tenho a agradecer e desejar sucesso à todos da Fly Assessoria.' ImageUser={Rogério} Name='Rogério' Profession='Vendedor' />
        </Grid>

        <Divider />

        <Flex maxW='1400px' mx='10%' py='10%' flexDirection={{ base: 'column', md: 'row' }}>
          <Box flex='1' mr='5%'>

            <Title as='h2' mb='6'>Fale conosco por email</Title>
            {/* <Text>A Fly Assessoria acredita que todos têm o direito à casa própria, por isso a Fly Assessoria está empenhada em possibilitar que todas as famílias, independentemente da renda, tenha o financiamento aprovado.</Text><br /> */}

            <Text>Basta ter um nome limpo e entrar em contato com um de nossos servidores e nós o ajudaremos ao durante o processo de aprovação.</Text>
          </Box>

          <FormControl mt={{ base: '20', md: '0px' }} as='form' onSubmit={handleForm} flex='1'>
            <VStack spacing={4}>
              <InputForm label='Nome' placeholder='Nome' required={true} onChange={(e) => { setName(e.target.value) }} />
              {/* <InputForm label='Email' placeholder='Email' required={true} /> */}
              <InputForm label='Numero' placeholder='numero' required={true} onChange={(e) => { setNumber(Number(e.target.value)) }} />
              <FormControl>
                <FormLabel textAlign='start'>Menssage</FormLabel>
                <Textarea placeholder='Fale conosco' onChange={(e) => { setMessage(e.target.value) }} />
              </FormControl>

              <Stack>
                <Checkbox required>Eu estou de acordo em fornecer meus dados para que a Fly Asessoria possa me mandar mensagens por email, ou pelo número fornecido.</Checkbox>
              </Stack>
              <ButtonCompont type='submit' w='100%' Text='Enviar' />
            </VStack>
          </FormControl>
        </Flex>


        <Box bgColor='red.500' py={{ base: '50px', lg: '5%' }} textAlign='center'>
          <Title as='h2' mb='20' color='white'>Perguntas</Title>
          <Box maxW='1400px' mx='10%'>
            <Accordion>
              <AccordionItemComponent
                Question='Seu financiamento foi negado ou está sem crédito?'
                Response='Basta ter nome limpo que a Fly Assessoria
                aprova seu crédito, independente da renda.
                Pague somente após ter o crédito aprovado.
                Rápido, fácil e sem burocracia.'/>
            </Accordion>
          </Box>
        </Box>

        <Box cursor="pointer" position="fixed" bottom={4} right={4} w="80px" h="80px">
          <Link href="https://wa.me/5511991151492?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+aprova%C3%A7%C3%A3o+do+financiamento+im%C3%B3biliario.">

            <Image src={Wts} alt="Whatsapp" />
          </Link>
        </Box>
      </main>
    </>
  )
}
