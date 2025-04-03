'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BookingForm } from '@/components/BookingForm'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export default function BookingPage() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      
      <Container maxW="container.lg" flex="1" py={12}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading size="xl" mb={4}>Book Your Dingo TX1000</Heading>
            <Text fontSize="lg" color="gray.300">
              Complete the form below to request a rental. All requests will be reviewed for approval.
            </Text>
          </Box>
          
          <BookingForm />
        </VStack>
      </Container>
      
      <Footer />
    </Box>
  )
} 