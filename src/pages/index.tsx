import { Accordion, Box, Checkbox, Divider, Fade, Flex, FormControl, FormLabel, Grid, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ButtonCompont from '../components/global/Button'
import Comment from '../components/global/Comment'
import Span from '../components/global/Span'
import Title from './../components/global/Title'
import ApprovalStage from '../components/global/ApprovalStage'

import Elissandra from './../img/testemunho-fly-assessoria-1.png'
import Kelly from './../img/testemunho-fly-assessoria-2.png'
import Rogério from './../img/testemunho-fly-assessoria-3.png'

import DocumentShipping from './../img/envio-de-documento.jpg'
import AnalyzeDocument from './../img/analisamos-documentos.jpg'
import RoutingForApproval from './../img/encaminhamento-para-aprovação.jpg'
import InputForm from '../components/form/Input'
import AccordionItemComponent from '../components/global/AccordionItemComponent'

export default function Index() {
  const [time, setTime] = useState<boolean>()

  useEffect(() => {
    setTimeout(() => { setTime(true) }, 1000)
  }, [])

  function handleForm() {
    console.log('enviou')
  }


  return (
    <>
      <Head>
        <title>Fly Assessoria - Assessoria Habitacional</title>
        <meta property='title' content='Assessoria habitacional' />
      </Head>
      <main>

        <Flex h='100vh' alignItems='center' justifyContent='space-between' maxW='1400px' mx='10%'>
          <Box flex='1'>
            <Fade in={time} animate={{ opacity: 1 }}>
              <Span>Conheça a Fly Assessoria</Span>
              <Title mt='1' as='h1' color='blue.800'>Conquiste sua casa própria, sem burocrácia e dor de cabeça</Title>
              <ButtonCompont Text='FALAR PELO WHATSAPP' />
            </Fade>
          </Box>

          <Box flex='1'>
            qwe
          </Box>
        </Flex>

        <Divider />

        <Grid gridTemplateColumns='1fr 1fr 1fr' columnGap='5%' maxW='1400px' mx='10%' py='10%'>
          <Comment Commentary='Que a Fly cresça ainda mais, podendo ajudar mulheres que assim como eu, lutam para conquistar o sonho do seu imóvel.' ImageUser={Elissandra} Name='Elissandra' Profession='Advogada' />
          <Comment Commentary='...os profissionais que fizeram toda a diferença no processo... eles realmente sabem assessorar o cliente!' ImageUser={Kelly} Name='Kelly' Profession='Habitacional' />
          <Comment Commentary='...eles conseguirem aprovação do meu crédito, só tenho a agradecer e desejar sucesso à todos da Fly Assessoria.' ImageUser={Rogério} Name='Rogério' Profession='Vendedor' />
        </Grid>

        <Divider />

        <Box bgColor='red.500' py='5%' textAlign='center'>
          <Span color='white'>Veja como é simples a aprovação do seu crédito</Span>
          <Grid mt='10' maxW='1400px' templateColumns='1fr 1fr 1fr' columnGap='5%' mx='10%'>
            <ApprovalStage PathImage={DocumentShipping} TitleStage='Você envia seus documentos' DescriptionStage='Você envia seus documentos para nossa análise sem pagar nada!' />
            <ApprovalStage PathImage={AnalyzeDocument} TitleStage='Analisamos seus documentos' DescriptionStage='Seus documentos são analisados cuidadosamente' />
            <ApprovalStage PathImage={RoutingForApproval} TitleStage='Encaminhado para aprovação' DescriptionStage='Estando tudo certo, seus documentos são enviados para aprovar seu crédito.' />
          </Grid>

          <Flex justifyContent='center'>
            <ButtonCompont Text='FALE AGORA COM NOSSA EQUIPE' bgColor='blue.800' _hover={{ bgColor: 'blue.700' }} />
          </Flex>
        </Box>

        <Divider />

        <Flex maxW='1400px' mx='10%' py='10%'>
          <Box flex='1' mr='5%'>
            <Title as='h2' mb='6'>Fale conosco por email</Title>
            <Text>A Fly Assessoria acredita que todos têm o direito à casa própria, por isso a Fly Assessoria está empenhada em possibilitar que todas as famílias, independentemente da renda, tenha o financiamento aprovado.</Text><br />

            <Text>Basta ter um nome limpo e entrar em contato com um de nossos servidores e nós o ajudaremos ao durante o processo de aprovação.</Text>
          </Box>

          <FormControl as='form' onSubmit={handleForm} flex='1'>
            <VStack spacing={4}>
              <InputForm label='Nome' placeholder='Nome' required={true} />
              <InputForm label='Email' placeholder='Email' required={true} />
              <InputForm label='Numero' placeholder='numero' required={true} />
              <FormControl>
                <FormLabel textAlign='start'>Menssage</FormLabel>
                <Textarea placeholder='Fale conosco' />
              </FormControl>

              <Stack>
                <Checkbox required>Eu estou de acordo em fornecer meus dados para que a Fly Asessoria possa me mandar mensagens por email, ou pelo número fornecido.</Checkbox>
              </Stack>
              <ButtonCompont type='submit' w='100%' Text='Enviar' />
            </VStack>
          </FormControl>
        </Flex>


        <Box bgColor='red.500' py='5%' textAlign='center'>
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
      </main>
    </>
  )
}
