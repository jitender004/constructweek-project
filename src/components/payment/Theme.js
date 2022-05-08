import { extendTheme } from "@chakra-ui/react";

// const breakpoints = {
//   sm: '30em',
//   md: '48em',
//   lg: '62em',
//   xl: '80em',
//   '2xl': '96em',
// }

const theme = extendTheme({
  // breakpoints,
    fonts: {
      heading: "Playfair Display, serif",
      body: "Jost, sans-serif"
    },
    components:{
      Divider:{
        colorScheme: 'red'
      }
    }
  })
  
export default theme