import { Image,Grid,GridItem,Text,Center,Button,Box } from "@chakra-ui/react"
export const Tremding = ()=>{
    const img_arr = [
        {
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311930311_RLLZ_1_1800x1800.jpg?v=1651699524",
            title:'STUART WEITZMAN LOWLAND SUEDE OVER-THE-KNEE BOOT',
            diss_price:"$694.00",
            price:"$420.60",
            save:"Save 39%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/wtlliMyyv3hcuS7RGVS0VZojPouPYfsw-25_1800x1800.jpg?v=1607399172",
            title:'ROXY WOMENS DOWN WINTER PUFFER COAT',
            diss_price:"$492.00",
            price:"$385.29",
            save:"Save 22%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Monsieur-1-XWY1I-1_1800x1800.jpg?v=1628917488",
            title:'DIOR PILOT SUNGLASSES MONSIEUR 1 XWY1I GOLD/BLACK/HAVANA 63MM',
            diss_price:"$492",
            price:"$383.97",
            save:"Save 22%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1885891_1800x1800.jpg?v=1637852340",
            title:"JACQUEMUS BROWN 'LE BAMBINO' LEATHER CROSSBODY PURSE",
            diss_price:"$473.00",
            price:"$347.65",
            save:"Save 27%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010994296_RLLZ_1_1800x1800.jpg?v=1651836155",
            title:"GUCCI DOUBLE G LEATHER BELT",
            diss_price:"$669.00",
            price:"$505.65 ",
            save:"Save 24%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784215_RLLZ_1_1800x1800.jpg?v=1651602649",
            title:'STUART WEITZMAN LAINE SUEDE COMBAT BOOT',
            diss_price:"$694.00",
            price:"$420.60",
            save:"Save 39%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/8d21d1b4-11d7-4354-9fde-fd28589989ea_1800x1800.jpg?v=1628207566",
            title:'OFF WHITE C/O VIRGIL ABLOH WHITE ARROWS CARRY ON SUITCASE',
            diss_price:"$492.00",
            price:"$385.29",
            save:"Save 22%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/DQ0171-26X-1_1800x1800.jpg?v=1603923722",
            title:'DSQUARED2 RECTANGULAR SUNGLASSES DQ0171 26X CRYSTAL 52MM 171',
            diss_price:"$492",
            price:"$383.97",
            save:"Save 22%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/CatStyleDior-2-KB72K-1_1800x1800.jpg?v=1609777428",
            title:"DIOR RECTANGULAR SUNGLASSES CATSTYLEDIOR 2 KB72K GRAY/RUTHENIUM 54MM",
            diss_price:"$473.00",
            price:"$347.65",
            save:"Save 27%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/9f8823b8-195e-4999-9b82-440c7c81bc9d_1800x1800.jpg?v=1627405619",
            title:"BURBERRY BLACK TB MOTIF POLO SHIRT",
            diss_price:"$669.00",
            price:"$505.65 ",
            save:"Save 24%"
        },
    ]

    return (
        <div>
            <Center><Text fontSize='4xl' mt='10' mb='5'>TRENDING NOW</Text></Center>
            <Center>
                <Grid templateColumns='repeat(5, 1fr)'>
                    {img_arr.map((e)=>{
                        return <GridItem w='100%' p='5'>
                            <Box h='220px'>
                                <Image w='100%' maxH='200px' src={e.imgurl} />
                            </Box>                            
                            <Center>
                                <Box textAlign='center'><Text mb='2'>{e.title}</Text></Box>
                            </Center>                               
                            <Center>
                            <Text as='del' p='1'>{ e.diss_price } from</Text>
                            <Text p='1'>{ e.price }</Text>
                            <Text color='red' p='1'>{ e.save }</Text>
                            </Center>                          
                        </GridItem >
                    })}
                </Grid >
            </Center>
            <Center><Button bg='black' color='white' mb='5'>VIEW ALL</Button></Center>
            <hr></hr>
        </div>
    )
}