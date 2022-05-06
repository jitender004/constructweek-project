import { Center,
    Text,
    FormControl,
    Input,
    FormLabel,
    Box,
    Link,
    Button,} from "@chakra-ui/react"

export const Login = ()=>{

    return (
        <div>
           <Center mb='5'><Text fontSize='5xl'>LOGIN</Text></Center>
            <Center>
                <Box width='30%'>
                    <FormControl isRequired mb='10'>
                        <FormLabel htmlFor='Email'>Email</FormLabel>
                        <Input id='mail' placeholder='' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='Password'>Password</FormLabel>
                        <Input id='pass' placeholder='' />
                    </FormControl>
                </Box>   
            </Center>
            <Center><Button width='30%' mt='10' bg='black' color='white'>SIGN IN</Button></Center>
            <Center><Link mt='5'>CREATE ACCOUNT</Link></Center>
        </div>
    )
}