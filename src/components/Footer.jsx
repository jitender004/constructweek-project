import { Image,Grid,GridItem,Text,Center,Button } from "@chakra-ui/react"
export const Footer = ()=>{
    const footer_arr = [
        {
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/files/denim_540x.jpg?v=1615204984",
            title:"UP TO 85% OFF THE DENIM SHOP FOR HIM & HER",
            des:"From Hudson Jeans, Joe's Jeans, J Brand & More",
            btn_text:"SHOP DENIM",
        },
        {
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/files/lightweight_jackets_720x.jpg?v=1630509164",
            title:"UP TO 80% OFF LIGHTWEIGHT JACKETS & COATS",
            des:"Must-Haves From Cole Haan, Burberry, & More",
            btn_text:"SHOP OUTERWEAR",
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/files/accesories_720x.jpg?v=1630509636",
            title:"UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES",
            des:"Shop Wallets, Belts, Hats, Sunglasses & More",
            btn_text:"SHOP WOMEN'S ACCESSORIES",
        }
    ]

    return (
        <div>
            <Center>
                <Grid templateColumns='repeat(3, 1fr)' gap={1}>
                    {footer_arr.map((e)=>{
                        return <Center>
                            <GridItem w='100%' p='5' mt='5' mb='5'>
                                <Image w='100%' h='300' src={e.imgurl} />
                                <Center><Text mt='2'>{e.title}</Text></Center>
                                <Center><Text mt='2'>{ e.des }</Text></Center>
                                <Center><Button mt='4' bg='white' color='black' border='1px solid black'>{e.btn_text}</Button></Center>
                            </GridItem >
                        </Center>
                    })}
                </Grid >
            </Center>
            <hr></hr>
        </div>
    )
}