'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ReactNode } from 'react'

// Define the custom theme with black background and red accents
const theme = extendTheme({
  colors: {
    brand: {
      primary: '#000000',
      accent: '#FF0000',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.primary',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        primary: {
          bg: 'brand.accent',
          color: 'white',
          _hover: {
            bg: 'red.700',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
  },
})

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
} 