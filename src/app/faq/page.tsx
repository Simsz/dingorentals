'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function FaqPage() {
  const faqItems = [
    {
      question: "What is a Dingo TX1000?",
      answer: "The Dingo TX1000 is a compact utility loader designed for various construction and landscaping tasks. It is lightweight, versatile, and can be fitted with multiple attachments for different jobs including digging, trenching, grading, and material handling."
    },
    {
      question: "Do I need experience to operate the Dingo TX1000?",
      answer: "While prior experience with construction equipment is helpful, the Dingo TX1000 is designed to be user-friendly. We provide basic operational instructions with each rental. However, for safety reasons, we recommend that operators have some familiarity with similar equipment."
    },
    {
      question: "What are your rental rates?",
      answer: "We offer flexible rental options including hourly ($75/hour with a 4-hour minimum), daily ($350/day), weekly ($1,500/week), and monthly ($4,500/month) rates. Contact us for special pricing on extended rentals."
    },
    {
      question: "Is delivery available?",
      answer: "Yes, we offer delivery services within a 25-mile radius for an additional fee. The delivery fee depends on your location. Please specify your delivery needs when making your reservation."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, debit cards, and business checks (for pre-approved business accounts only). Payment is required before the rental period begins."
    },
    {
      question: "Is a security deposit required?",
      answer: "Yes, a security deposit is required for all rentals. The amount varies depending on the rental duration. The deposit is fully refundable upon the satisfactory return of the equipment in the same condition it was rented."
    },
    {
      question: "What happens if the equipment breaks down during my rental?",
      answer: "If the equipment breaks down due to mechanical failure (not caused by misuse), contact us immediately. We will either repair the equipment, replace it if available, or prorate your rental fee for the downtime."
    },
    {
      question: "Do you provide attachments with the Dingo?",
      answer: "Basic attachments like the bucket are included with the rental. Specialized attachments such as augers, trenchers, or forks are available for an additional fee. Please inquire about specific attachments when making your reservation."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made at least 48 hours before the rental period incur no fee. Cancellations within 24-48 hours incur a 50% fee of the rental cost. Cancellations less than 24 hours before the rental period or no-shows are subject to the full rental fee."
    },
    {
      question: "Do I need insurance to rent equipment?",
      answer: "For individuals, we offer damage waiver options that can be purchased at the time of rental. For business rentals, we require proof of insurance that covers rented equipment with appropriate liability coverage."
    }
  ]

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />

      <Container maxW="container.lg" flex="1" py={12}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading size="xl" mb={4}>Frequently Asked Questions</Heading>
            <Text fontSize="lg" color="gray.300">
              Everything you need to know about renting our Dingo TX1000
            </Text>
          </Box>

          <Accordion allowMultiple>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} border="none" mb={4}>
                <h2>
                  <AccordionButton 
                    bg="gray.900" 
                    _hover={{ bg: "gray.800" }} 
                    borderRadius="md"
                    p={4}
                  >
                    <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
                      {item.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} pt={2} px={4}>
                  <Text>{item.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Box textAlign="center" mt={8}>
            <Text mb={4}>Still have questions? Contact us directly!</Text>
            <Button 
              as={Link} 
              href="/contact" 
              colorScheme="red"
              size="lg"
            >
              Contact Us
            </Button>
          </Box>
        </VStack>
      </Container>

      <Footer />
    </Box>
  )
} 