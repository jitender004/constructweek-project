import { 
    Box, 
    Heading, 
    Text, 
    Divider, 
    Image, 
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Radio,
    RadioGroup,
    Stack,
    Checkbox,
    HStack,
    VStack,
    Spinner,
    Tag,
} from '@chakra-ui/react';
import { Link  } from 'react-router-dom';
import {useState} from 'react';
import {ChevronLeftIcon} from '@chakra-ui/icons';
// import { CartItems } from './CartItems';


export const Cart = () => {
    const [value, setValue] = useState('1');

    // const handleRadio = (e) => {
    //     e.target.name === value ? setValue(2) : setValue(1)
    //     console.log(e.target);
    // }
    return(
        <Box border='1px solid black' display='flex' height='1080px'>
                <Box border='1px solid red' display='flex' flexDirection='column' pl={{lg:'8%'}} pt={{lg:'5%'}} mr={{lg:'3%'}}>
                    <Box>
                        <Link to='#'>
                            <Image
                                height='40px'
                                width='261px'
                                src='https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?180653'
                                alt='BlueFly Logo'
                            />
                        </Link>
                    </Box>
                    <Box border='1px solid #cdcdcd' mt={{lg:'12%'}} w='600px' borderRadius='8px'>
                        <TableContainer >
                            <Table variant='simple' size='md'>
                                <Tbody>
                                <Tr>
                                    <Td color='#737373'>Contact</Td>
                                    <Td>vjrzeyqkravrrrpykt@kvhrs.com</Td>
                                    <Td > <Link to='#'> Change </Link></Td>
                                </Tr>
                                <Tr>
                                    <Td color='#737373'>Ship to</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td ><Link to='#'> Change </Link></Td>
                                </Tr>
                                <Tr>
                                    <Td color='#737373'>Method</Td>
                                    <Td>metres (m)</Td>
                                    <Td ></Td>
                                </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box border='1px solid teal' mt={{lg:'12%'}}>
                        <Box border='1px solid black'>
                            <Text fontSize='1.28em' color='#333333'>Payment</Text>
                            <Text fontSize='14px'>All transactions are secure and encrypted</Text>
                        </Box>
                        <Box border='1px solid red'>
                            payment table
                        </Box>
                    </Box>
                    <Box mt={{lg:'12%'}}>
                        <Box >
                            <Text fontSize='1.28em' color='#333333'>Billing Address</Text>
                            <Text fontSize='14px'>Select the address that matches your card or payment method.</Text>
                        </Box>
                        <Box border='1px solid #cdcdcd' borderRadius='8px' mt='22px' padding='4px'>
                            <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='column' >
                                    <Radio size='md' p='8px' fontWeight='bold' colorScheme='blackAlpha' value='1'>Same as shipping address</Radio>
                                    <hr />
                                    <Radio size='md' p='8px' fontWeight='bold' colorScheme='blackAlpha' value='2'> Use a different billing address</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box mt={{lg:'12%'}}>
                        <Box>
                            <Text fontSize='1.28em' color='#333333'>Remember me</Text>
                        </Box>
                        <Box border='1px solid #cdcdcd' mt='22px' mb='22px' borderRadius='8px'>
                            <Checkbox outline='none' p='8px' iconColor='blackAlpha' colorScheme='blackAlpha' spacing={4} size='lg'>Save my information for faster checkout</Checkbox>
                        </Box>
                    </Box>
                    <Box border='1px solid red' mt={{lg:'5%'}}>
                        <HStack spacing='24px'>
                            <Link to='#'> <ChevronLeftIcon />Return to shipping</Link>
                        </HStack>
                    </Box>
                </Box>
                <Divider orientation='vertical'/>
                <Box border='1px solid teal' display='flex' flexDirection='column' ml={{lg:'3%'}} pt={{lg:'5%'}}>
                    <Box border='1px solid red'>
                        <Box mb={{lg:'3%'}}>
                            <HStack spacing='10px'>
                                <Box border='1px solid #cdcdcd' borderRadius='8px' h='4.6em' w='4.6em' background='#fff'>
                                    <Box border='1px solid #cdcdcd' borderRadius='8px' w='100%' h='100%' overflow='hidden'>
                                        <Image
                                            maxW='100%'
                                            maxH='100%'
                                            margin='auto'
                                            src='https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2226797_small.jpg?v=1649703473'
                                            alt='Triple S Sneakers'
                                        />
                                    </Box>
                                </Box>
                                
                                <Box border='1px solid orange' w='340px' h='4.6em' overflow='hidden'>
                                    <VStack align='left' spacing={0}>
                                        <Text fontSize='md' fontWeight='bold' wordBreak='break-word'>Triple S Sneakers</Text>
                                        <Text fontWeight='light' fontSize='sm'>44/x</Text>
                                    </VStack>
                                </Box>
                                <Box pl='1em' border='1px solid red'>
                                    <Text textAlign='right' fontWeight='bold'>
                                        $122.40
                                    </Text>
                                </Box>
                            </HStack>
                        </Box>     
                
                            <Box>
                                <HStack spacing='10px'>
                                    <Box border='1px solid #cdcdcd' borderRadius='8px' h='4.6em' w='4.6em' background='#fff'>
                                    <Box border='1px solid #cdcdcd' borderRadius='8px' w='100%' h='100%' overflow='hidden'>
                                        <Image
                                            maxW='100%'
                                            maxH='100%'
                                            margin='auto'
                                            src='https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2226797_small.jpg?v=1649703473'
                                            alt='Triple S Sneakers'
                                        />
                                    </Box>
                                    </Box>
                                    <Box border='1px solid orange' w='340px' h='4.6em' overflow='hidden'>
                                        <VStack align='left' spacing={0}>
                                            <Text fontSize='md' fontWeight='bold' wordBreak='break-word'>Triple S Sneakers</Text>
                                            <Text fontWeight='light' fontSize='sm'>44/x</Text>
                                        </VStack>
                                    </Box>
                                    <Box pl='1em' border='1px solid red'>
                                        <Text textAlign='right' fontWeight='bold'>
                                            $122.40
                                        </Text>
                                    </Box>
                                </HStack>
                            </Box>                        
                                         
                    </Box>
                </Box>
            </Box>
    );
}
/* 

<Tag 
    size='sm' 
    borderRadius='100%' 
    backgroundColor='rgba(114,114,114,0.9)'
    fontSize='0.85em'
    fontWeight='500'
    textAlign='center'
    color='#fff'
    minW='1.75em'
    height='1.75em'
    position='absolute'
    right='470px'
    top='62px'
    zIndex={3}
>
    1
</Tag>
*/