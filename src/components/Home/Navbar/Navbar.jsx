import {
  Box,
  Image,
  Text,
  Flex,
  GridItem,
  Grid,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  VStack,
  Container,
  HStack,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
// import { IconButton } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen_1, onOpen_1, onClose_1 } = useDisclosure();
  const { isOpen2, onOpen2, onClose2 } = useDisclosure();
  const { isOpen3, onOpen3, onClose3 } = useDisclosure();
  const { isOpen4, onOpen4, onClose4 } = useDisclosure();
  const { isOpen5, onOpen5, onClose5 } = useDisclosure();
  const { isOpen6, onOpen6, onClose6 } = useDisclosure();
  const { isOpen7, onOpen7, onClose7 } = useDisclosure();
  const { isOpen8, onOpen8, onClose8 } = useDisclosure();
  const { isOpen9, onOpen9, onClose9 } = useDisclosure();

  return (
    <Box
      w="100%"
      // p={2}
      color="black"
      mt="20px"
      // mb="-15px"
      position="fixed"
      top="-5"
      background="white"
      zIndex="100"
      // border="1px solid red"
    >
      <Box bg="black" p={2} color="white" fontSize={12}>
        <Flex>
          <Box marginLeft={20} display="flex" justifyContent="space-between">
            <Text marginRight={5}>Free Shipping</Text>
            <Text>Check Store</Text>
          </Box>
          <Spacer />
          <Box marginRight={20} display="flex">
            <Text marginRight={5}>Help</Text>
            <Text>Dowload App</Text>
          </Box>
        </Flex>
      </Box>
      {/* <Grid className="upper" templateColumns="repeat(5, 1fr)" gap={8}>
        <GridItem w="100%" h="10" />
        <GridItem w="100%" h="10" />
        <GridItem w="100%" h="10">
         
        </GridItem>
        <GridItem w="100%" h="10" />
        <GridItem w="100%" h="10" color="black">
          <Flex gap={5} align="right">
            <Flex align="center" gap={2}>
              <FaSearch fontSize="25px" />
              <Text
                fontSize="13px"
                lineHeight="20.8px"
                textAlign="start"
                letterSpacing="2.6px"
              >
                SEARCH
              </Text>
            </Flex>
            <Link to="/login">
              <BsPerson fontSize="25px" />
            </Link>
            <Link to="/cart">
              <BsBag fontSize="25px" align="center" />
            </Link>
            <Link to="/cart"></Link>
          </Flex>
        </GridItem>
      </Grid> */}

      <Box
        w="100%"
        align="center"
        backgroundColor="light-grey"
        // border="1px solid black"
      >
        <Flex>
          <Link to="/">
            <Image
              width={250}
              height={20}
              src="https://www.linkpicture.com/q/logo1_35.png"
              alt="Dan Abramov"
            />
          </Link>
          <Menu isOpen6={isOpen6}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={2}
              borderRadius={5}
              _hover={{ bg: "white" }}
              aria-label="Courses"
              fontWeight="normal"
              fontSize="13px"
              lineHeight="15px"
              textAlign="center"
              letterSpacing="2px"
              fontFamily="futura,sans-serif"
              onMouseEnter={onOpen6}
              onMouseLeave={onClose6}
            >
              Women
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen6}
              onMouseLeave={onClose6}
              display="flex"
              gap="30px"
              align="center"
            >
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  WOMEN'S JEWELERY
                </h4>
                <Link to="/product">
                  <MenuItem>Shop All</MenuItem>
                </Link>

                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  WOMEN'S WATCHES
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  WOMEN'S CLOTHING
                </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  WOMEN'S FASHION
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpen}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              _hover={{ bg: "white" }}
              aria-label="Courses"
              fontWeight="normal"
              fontSize="12px"
              lineHeight="15px"
              textAlign="center"
              letterSpacing="2px"
              fontFamily="futura,sans-serif"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              display="inline-block"
            >
              Men
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              display="flex"
              gap="30px"
              align="center"
            >
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  MEN'S SHOES
                </h4>

                <MenuItem>Shop All</MenuItem>
                <MenuItem>Jeans</MenuItem>
                <MenuItem>T-Shirts</MenuItem>
                <MenuItem>Jeans</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Trousers</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  MEN'S DESIGNERS
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  MEN'S JACKETS
                </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  MEN'S CLOTHING
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
          </Menu>
          <Menu isOpen_1={isOpen_1}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              _hover={{ bg: "white" }}
              aria-label="Courses"
              fontWeight="normal"
              fontSize="12px"
              lineHeight="15px"
              textAlign="center"
              letterSpacing="2px"
              fontFamily="futura,sans-serif"
              onMouseEnter={onOpen_1}
              onMouseLeave={onClose_1}
            >
              {" "}
              KIds{" "}
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen_1}
              onMouseLeave={onClose_1}
              display="flex"
              gap="30px"
              align="center"
            >
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  KID'S FASHION
                </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  KID'S DESIGNERS SHOES
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  KID'S BAGS
                </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  KID'S ACCESSORIES
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
          </Menu>
          <Menu isOpen2={isOpen2}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2]}
              px={3}
              borderRadius={5}
              _hover={{ bg: "white" }}
              aria-label="Courses"
              fontWeight="normal"
              fontSize="12px"
              lineHeight="15px"
              textAlign="center"
              letterSpacing="2px"
              fontFamily="futura,sans-serif"
              onMouseEnter={onOpen2}
              onMouseLeave={onClose2}
            >
              Shoes
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen2}
              onMouseLeave={onClose2}
              display="flex"
              gap="30px"
              align="center"
            >
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  WOMEN'S SHOES
                </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  WOMEN'S DRESSES
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  MEN'S SHOES
                </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                 MEN'S DESIGNERS
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
          </Menu>
          <Menu isOpen2={isOpen2}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2]}
              px={3}
              borderRadius={5}
              _hover={{ bg: "white" }}
              aria-label="Courses"
              fontWeight="normal"
              fontSize="12px"
              lineHeight="15px"
              textAlign="center"
              letterSpacing="2px"
              fontFamily="futura,sans-serif"
              onMouseEnter={onOpen2}
              onMouseLeave={onClose2}
            >
              Bags
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen2}
              onMouseLeave={onClose2}
              display="flex"
              gap="30px"
              align="center"
            >
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  WOMEN'S HANDBAG'S
                </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  WOMEN'S DESIGNERS BAGS
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  MEN'S BAGS
                </h4>
                <MenuItem>Shop All</MenuItem>
                <MenuItem>Boots</MenuItem>
                <MenuItem>Espadrilles</MenuItem>
                <MenuItem>Flats</MenuItem>
                <MenuItem>Mules & Slides</MenuItem>
                <MenuItem>Oxfords & Loafers</MenuItem>
                <MenuItem>Pumps & Heels</MenuItem>
                <MenuItem>Sandals</MenuItem>
                <MenuItem>Slippers</MenuItem>
                <MenuItem>Sneakers</MenuItem>
                <MenuItem>Wedges</MenuItem>
              </div>
              <div align="center">
                <h4
                  fontSize="13px"
                  lineHeight="20.8px"
                  textAlign="center"
                  letterSpacing="2.6px"
                >
                  MEN'S DESIGNER BAGS
                </h4>
                <MenuItem>Burberry</MenuItem>
                <MenuItem>Chloe</MenuItem>
                <MenuItem>Christian Louboutin</MenuItem>
                <MenuItem>Dolce & Gabbana</MenuItem>
                <MenuItem>Guiseppe</MenuItem>
                <MenuItem>Gucci</MenuItem>
                <MenuItem>Jimmy Choo</MenuItem>
                <MenuItem>Manolo Blahnik</MenuItem>
                <MenuItem>Prada</MenuItem>
                <MenuItem>Saint Laurent</MenuItem>
                <MenuItem>Salvatore</MenuItem>
                <MenuItem>Tod's</MenuItem>
              </div>
            </MenuList>
          </Menu>
          <Menu isOpen9={isOpen9}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={2}
              borderRadius={5}
              _hover={{ bg: "white" }}
              aria-label="Courses"
              fontWeight="normal"
              fontSize="12px"
              lineHeight="15px"
              textAlign="center"
              letterSpacing="2.6px"
              color="red"
              fontFamily="futura,sans-serif"
              onMouseEnter={onOpen9}
              onMouseLeave={onClose9}
            >
              Beauty
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen9}
              onMouseLeave={onClose9}
              display="flex"
              fontFamily="futura,sans-serif"
              gap="30px"
              align="center"
            >
              <div>
                <h4>WOMEN'S</h4>
                <MenuList>Accessories</MenuList>
                <MenuList>Activewear</MenuList>
                <MenuList>Coats & Jackets</MenuList>
                <MenuList>Dresses</MenuList>
                <MenuList>Handbags</MenuList>
                <MenuList>Jeans & Denim</MenuList>
                <MenuList>Jewelry</MenuList>
                <MenuList>Lingerie & Hoisery</MenuList>
                <MenuList>Pants & Leggings</MenuList>
                <MenuList>Shoes</MenuList>
                <MenuList>Sunglasses</MenuList>
                <MenuList>Swimwear</MenuList>
                <MenuList>Tops</MenuList>
                <MenuList>Watches</MenuList>
              </div>
              <div>
                <h4>MEN'S</h4>
                <MenuList>Accessories</MenuList>
                <MenuList>Coats & Jackets</MenuList>
                <MenuList>Dress Shirts</MenuList>
                <MenuList>Pants</MenuList>
                <MenuList>Polo Shirts</MenuList>
                <MenuList>Shoes</MenuList>
                <MenuList>Sunglasses</MenuList>
                <MenuList>Suit &</MenuList>
                <MenuList>Sweaters</MenuList>
                <MenuList>T-Shirts</MenuList>
                <MenuList>Watches</MenuList>
              </div>
            </MenuList>
          </Menu>
          <InputGroup marginLeft={15} marginTop="20px">
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineSearch color="gray.300" cursor="pointer" />}
            />
            <Input
              width={400}
              type="tel"
              placeholder="What are you looking for ?"
            />
          </InputGroup>
          <Tooltip hasArrow label="login" placement="bottom">
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                margin: "27px 27px",
              }}
            >
              <Link to="/login" style={{ marginRight: "20px" }}>
                <BsPerson fontSize="25px" />
              </Link>
              <Tooltip hasArrow label="cart" placement="top" closeDelay={100}>
                <Link to="/cart">
                  <BsBag fontSize="25px" align="center" />
                </Link>
              </Tooltip>
            </div>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};
