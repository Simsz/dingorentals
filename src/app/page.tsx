'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { RentalTile } from '@/components/RentalTile'
import { Box, Heading, Text, Flex, Container, Divider } from '@chakra-ui/react'

export default function Home() {
  // Rental options with pricing
  const rentalOptions = [
    {
      id: 'hourly',
      title: 'Hourly Rental',
      description: 'Perfect for quick jobs and small projects',
      pricing: {
        rate: '$75',
        period: 'per hour',
      },
      minDuration: '4 hours',
    },
    {
      id: 'daily',
      title: 'Daily Rental',
      description: 'Ideal for day-long projects',
      pricing: {
        rate: '$350',
        period: 'per day',
      },
      minDuration: '1 day',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {rentalOptions.map((option) => (
            <RentalTile 
              key={option.id}
              title={option.title}
              description={option.description}
              pricing={option.pricing}
              minDuration={option.minDuration}
              imagePath="/dingo_tx1000.jpeg"
            />
          ))}
        </div>
      </div>
      
      {/* Long-term rental section with Chakra UI styling */}
      <Box py={16} bg="black" borderTop="1px" borderBottom="1px" borderColor="gray.800">
        <Container maxW="container.xl">
          <Box textAlign="center" mb={12}>
            <Heading 
              as="h2" 
              fontSize="5xl" 
              fontWeight="bold" 
              mb={4}
            >
              Need a longer rental?
            </Heading>
            <Box w="24" h="1" bg="red.500" mx="auto" />
          </Box>
          
          <Flex justifyContent="center" gap={12} flexWrap="wrap" maxW="4xl" mx="auto">
            <Box 
              bg="gray.900" 
              p={8} 
              borderRadius="lg" 
              border="1px" 
              borderColor="gray.800"
              minW="240px"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Heading as="h3" size="md" mb={3}>Weekly Rate</Heading>
              <Text fontSize="4xl" fontWeight="bold" color="red.500">$1,500</Text>
            </Box>
            <Box 
              bg="gray.900" 
              p={8} 
              borderRadius="lg" 
              border="1px" 
              borderColor="gray.800"
              minW="240px"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Heading as="h3" size="md" mb={3}>Monthly Rate</Heading>
              <Text fontSize="4xl" fontWeight="bold" color="red.500">$4,500</Text>
            </Box>
          </Flex>
          
          <Box textAlign="center" mt={12}>
            <Link href="/contact">
              <Text 
                as="span" 
                color="red.500" 
                _hover={{ color: "red.400" }}
                transition="colors 0.3s"
              >
                <Text as="span" textDecoration="underline" mr={1} display="inline">
                  Contact us
                </Text>
                for special pricing on extended rentals
              </Text>
            </Link>
          </Box>
        </Container>
      </Box>
      
      <Footer />
    </main>
  )
}
