'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export function Footer() {
  return (
    <Box bg="black" color="white" borderTop="1px" borderColor="gray.800">
      <Container
        as={Stack}
        maxW={'container.xl'}
        py={10}
        spacing={8}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          <VStack align="flex-start" spacing={3}>
            <Heading size="md" color="red.500">DINGO RENTALS</Heading>
            <Text>Professional equipment rental services</Text>
            <Text>Serving the greater metropolitan area</Text>
          </VStack>

          <VStack align="flex-start" spacing={3}>
            <Heading size="sm">Contact Us</Heading>
            <Flex align="center" gap={2}>
              <FaPhone color="red" />
              <Link href="tel:+15551234567">(555) 123-4567</Link>
            </Flex>
            <Flex align="center" gap={2}>
              <FaEnvelope color="red" />
              <Link href="mailto:info@dingorentals.com">info@dingorentals.com</Link>
            </Flex>
            <Flex align="center" gap={2}>
              <FaMapMarkerAlt color="red" />
              <Text>123 Equipment Lane, Construction City</Text>
            </Flex>
          </VStack>

          <VStack align="flex-start" spacing={3}>
            <Heading size="sm">Quick Links</Heading>
            <Link href="/booking">Book Now</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </VStack>
        </Flex>

        <Box borderTopWidth={1} borderStyle={'solid'} borderColor="gray.700" pt={8}>
          <Text textAlign="center">
            © {new Date().getFullYear()} Dingo Rentals. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
} 