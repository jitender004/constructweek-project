import { Center,
    Text,
    FormControl,
    Input,
    FormLabel,
    Box,
    Checkbox,
    Button,} from "@chakra-ui/react"

export const CreateAccount = ()=>{

    return (
        <div>
           <Center mb='5'><Text fontSize='4xl' m='5'>CREATE ACCOUNT</Text></Center>
            <Center>
                <Box width='30%'>
                    <FormControl isRequired mb='5'>
                        <FormLabel htmlFor='FistName'>First Name</FormLabel>
                        <Input mb='5' id='Fname' placeholder='' />
                        <FormLabel htmlFor='LastName'>Last Name</FormLabel>
                        <Input mb='5' id='Lname' placeholder='' />
                        <FormLabel htmlFor='Email'>Email</FormLabel>
                        <Input mb='5' id='mail' placeholder='' />
                        <FormLabel htmlFor='Password'>Password</FormLabel>
                        <Input mb='5' id='pass' placeholder='' />
                    </FormControl>
                </Box>   
            </Center>
            <Center><Checkbox defaultChecked>Checkbox</Checkbox><Text>Subscribe to stay updated with new offers!</Text></Center>
            <Center><Button width='30%' mt='5' bg='black' color='white'>CREATE</Button></Center>
            
        </div>
    )
}