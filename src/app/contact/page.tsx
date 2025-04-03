'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  useToast,
  Divider,
} from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Message sent!',
        description: 'We&apos;ll get back to you as soon as possible.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      // Reset form here
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500)
  }

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />

      <Container maxW="container.lg" flex="1" py={12}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading size="xl" mb={4}>Contact Us</Heading>
            <Text fontSize="lg" color="gray.300">
              Have questions about renting our equipment? We&apos;re here to help!
            </Text>
          </Box>

          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            gap={10}
            justify="space-between"
          >
            {/* Contact Information */}
            <VStack 
              spacing={8} 
              align="flex-start" 
              flex="1" 
              p={6} 
              bg="gray.900" 
              borderRadius="lg"
            >
              <Heading size="md">Get In Touch</Heading>
              
              <VStack spacing={4} align="flex-start" w="full">
                <HStack>
                  <Box as={FaPhone} color="red.500" />
                  <Text>(555) 123-4567</Text>
                </HStack>
                
                <HStack>
                  <Box as={FaEnvelope} color="red.500" />
                  <Text>info@dingorentals.com</Text>
                </HStack>
                
                <HStack>
                  <Box as={FaMapMarkerAlt} color="red.500" />
                  <Text>123 Equipment Lane, Construction City</Text>
                </HStack>
              </VStack>
              
              <Divider />
              
              <Box>
                <Heading size="sm" mb={4}>Business Hours</Heading>
                <VStack spacing={2} align="flex-start">
                  <HStack>
                    <Box as={FaClock} color="red.500" />
                    <Text>Monday - Friday: 8:00 AM - 5:00 PM</Text>
                  </HStack>
                  <HStack>
                    <Box as={FaClock} color="red.500" />
                    <Text>Saturday: 9:00 AM - 3:00 PM</Text>
                  </HStack>
                  <HStack>
                    <Box as={FaClock} color="red.500" />
                    <Text>Sunday: Closed</Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>

            {/* Contact Form */}
            <VStack 
              as="form"
              onSubmit={handleSubmit}
              spacing={6} 
              align="flex-start" 
              flex="1"
              p={6}
              bg="gray.900"
              borderRadius="lg"
            >
              <Heading size="md">Send Us a Message</Heading>
              
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="your.email@example.com" />
              </FormControl>
              
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input placeholder="(555) 123-4567" />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea 
                  placeholder="How can we help you?" 
                  rows={5}
                />
              </FormControl>
              
              <Button 
                type="submit"
                colorScheme="red"
                isLoading={isSubmitting}
                loadingText="Sending"
                width="full"
              >
                Send Message
              </Button>
            </VStack>
          </Flex>
        </VStack>
      </Container>

      <Footer />
    </Box>
  )
} 