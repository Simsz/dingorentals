'use client'

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Flex,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHammer } from 'react-icons/fa'

interface RentalTilePricing {
  rate: string
  period: string
}

interface RentalTileProps {
  title: string
  description: string
  pricing: RentalTilePricing
  minDuration: string
  imagePath: string
}

export function RentalTile({
  title,
  description,
  pricing,
  minDuration,
  imagePath,
}: RentalTileProps) {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="gray.900"
      borderWidth="1px"
      borderColor="gray.800"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
    >
      <Box position="relative" height="300px" width="100%">
        <Image
          src={imagePath}
          alt="Dingo TX1000"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>

      <VStack p={8} spacing={5} align="flex-start">
        <Heading size="lg" mb={1}>{title}</Heading>
        <Text color="gray.300" fontSize="md">{description}</Text>
        
        <Box py={3}>
          <HStack spacing={2} alignItems="baseline">
            <Text fontSize="4xl" fontWeight="bold" color="red.500">
              {pricing.rate}
            </Text>
            <Text fontSize="md" color="gray.300">
              {pricing.period}
            </Text>
          </HStack>
        </Box>
        
        <Badge colorScheme="gray" py={1} px={2} fontSize="sm">MINIMUM: {minDuration}</Badge>
        
        <Text fontSize="sm" color="gray.400" mt={2}>
          Security deposit required. All rentals include basic operation instructions.
        </Text>
        
        <Link href="/booking" passHref style={{ width: '100%', marginTop: '12px' }}>
          <Flex
            className="construction-button"
            bg="red.600"
            color="white"
            fontWeight="bold"
            py={3}
            borderRadius="md"
            border="2px solid"
            borderColor="yellow.400"
            position="relative"
            overflow="hidden"
            transition="all 0.3s ease"
            justify="center"
            align="center"
            width="100%"
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
          >
            <FaHammer style={{ marginRight: '8px' }} />
            BOOK NOW
          </Flex>
        </Link>
      </VStack>
    </Box>
  )
} 