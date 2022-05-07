import { Image,Grid,GridItem,Text,Center,Button } from "@chakra-ui/react"
export const NewArrival = ()=>{
    const img_arr = [
        {
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1566289_1800x1800.png?v=1635615949",
            title:'"DIVA!" T-SHIRT',
            diss_price:"$694.00",
            price:"$420.60",
            save:"Save 39%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2246726_1800x1800.jpg?v=1651848885",
            title:'"LA MEDUSA" RUBBER MULES',
            diss_price:"$492.00",
            price:"$385.29",
            save:"Save 22%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2269028_1800x1800.jpg?v=1651849007",
            title:'"THE FLUORO MOTO SHOT" BAG',
            diss_price:"$492",
            price:"$383.97",
            save:"Save 22%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2087946_1800x1800.jpg?v=1638291787",
            title:"'FOR RIDING' RAINBOOTS",
            diss_price:"$473.00",
            price:"$347.65",
            save:"Save 27%"
        },{
            imgurl:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2149730_76cf6aa7-502b-4b5b-bd8e-31e1af9ed2bb_1800x1800.jpg?v=1646588764",
            title:"'KIKI' STRAW CANOTIER HAT",
            diss_price:"$669.00",
            price:"$505.65 ",
            save:"Save 24%"
        },
    ]

    return (
        <div>
            <Center><Text fontSize='4xl'>NEW ARRIVALS</Text></Center>
            <Center><Button bg='black' color='white'>VIEW ALL</Button></Center>
            <Center>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    {img_arr.map((e)=>{
                        return <GridItem w='100%' p='5' mb='10'>
                            <Image w='100%' h='300' src={e.imgurl} />
                            <Center><p>{e.title}</p></Center>
                            <Center>
                            <span>{ e.diss_price } from</span>&nbsp;&nbsp;
                            <span>{ e.price }</span>&nbsp;&nbsp;
                            <Text color='red'>{ e.save }</Text>
                            </Center>
                        </GridItem >
                    })}
                </Grid >
            </Center>
            <hr />
        </div>
    )
}