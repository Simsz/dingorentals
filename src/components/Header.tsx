'use client'

import { Box, Flex, HStack, Button, IconButton, useDisclosure, Container, Stack } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { FaHammer, FaTools } from 'react-icons/fa'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref>
    <Box
      px={3}
      py={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray.900',
      }}
    >
      {children}
    </Box>
  </Link>
)

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="black" px={4} borderBottom="1px" borderColor="gray.800">
      <Container maxW="container.xl">
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="outline"
            colorScheme="red"
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontWeight="bold" fontSize="xl" color="red.500">DINGO RENTALS</Box>
            <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/booking">Book Now</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </HStack>
          </HStack>
          
          {/* Construction-themed Book Now button */}
          <Link href="/booking" passHref>
            <Box 
              className="construction-button"
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
              justifyContent="center"
              bg="red.600"
              color="white"
              fontWeight="bold"
              px={6}
              py={3}
              borderRadius="md"
              border="2px solid"
              borderColor="yellow.400"
              position="relative"
              overflow="hidden"
              transition="all 0.3s ease"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, transparent 49%, #FFC107 49%, #FFC107 51%, transparent 51%)',
                backgroundSize: '10px 10px',
                opacity: 0.2,
              }}
              _hover={{
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 0 #7D2112',
                _before: {
                  opacity: 0.4,
                }
              }}
              _active={{
                transform: 'translateY(3px)',
                boxShadow: 'none',
              }}
              ml={4}
            >
              <FaHammer style={{ marginRight: '8px' }} />
              BOOK NOW
            </Box>
          </Link>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/booking">Book Now</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
} 