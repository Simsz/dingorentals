'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
  Stack,
  Heading,
  Text,
  useToast,
  Checkbox,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'

export function BookingForm() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Booking request submitted',
        description: 'Your rental request has been submitted for approval. We will contact you shortly.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }, 1500)
  }
  
  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)
  
  return (
    <Box 
      as="form" 
      onSubmit={handleSubmit}
      bg="gray.900" 
      p={8} 
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.800"
    >
      {step === 1 && (
        <VStack spacing={6} align="stretch">
          <Heading size="md">Step 1: Personal Information</Heading>
          
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First Name" />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last Name" />
            </FormControl>
          </Stack>
          
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="your.email@example.com" />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input placeholder="(555) 123-4567" />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Street Address" mb={2} />
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Input placeholder="City" />
              <Input placeholder="State" />
              <Input placeholder="Zip Code" />
            </Stack>
          </FormControl>
          
          <FormControl>
            <FormLabel>Emergency Contact Name</FormLabel>
            <Input placeholder="Emergency Contact Name" />
          </FormControl>
          
          <FormControl>
            <FormLabel>Emergency Contact Phone</FormLabel>
            <Input placeholder="(555) 123-4567" />
          </FormControl>
          
          <Button colorScheme="red" onClick={nextStep} mt={4}>Next: Rental Details</Button>
        </VStack>
      )}
      
      {step === 2 && (
        <VStack spacing={6} align="stretch">
          <Heading size="md">Step 2: Rental Details</Heading>
          
          <FormControl isRequired>
            <FormLabel>Rental Type</FormLabel>
            <Select placeholder="Select rental duration">
              <option value="hourly">Hourly ($75/hour, 4 hour minimum)</option>
              <option value="daily">Daily ($350/day)</option>
              <option value="weekly">Weekly ($1,500/week)</option>
              <option value="monthly">Monthly ($4,500/month)</option>
            </Select>
          </FormControl>
          
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <FormControl isRequired>
              <FormLabel>Start Date</FormLabel>
              <Input type="date" />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>End Date</FormLabel>
              <Input type="date" />
            </FormControl>
          </Stack>
          
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <FormControl>
              <FormLabel>Start Time</FormLabel>
              <Input type="time" />
            </FormControl>
            
            <FormControl>
              <FormLabel>End Time</FormLabel>
              <Input type="time" />
            </FormControl>
          </Stack>
          
          <FormControl>
            <FormLabel>Project Description</FormLabel>
            <Textarea placeholder="Briefly describe your project and how you plan to use the equipment" />
          </FormControl>
          
          <FormControl>
            <FormLabel>Delivery Address (if different from personal address)</FormLabel>
            <Checkbox mb={2}>Same as personal address</Checkbox>
            <Input placeholder="Street Address" mb={2} />
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Input placeholder="City" />
              <Input placeholder="State" />
              <Input placeholder="Zip Code" />
            </Stack>
          </FormControl>
          
          <HStack spacing={4}>
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button colorScheme="red" onClick={nextStep}>Next: ID & Payment</Button>
          </HStack>
        </VStack>
      )}
      
      {step === 3 && (
        <VStack spacing={6} align="stretch">
          <Heading size="md">Step 3: ID & Payment Information</Heading>
          
          <FormControl isRequired>
            <FormLabel>Government-Issued ID</FormLabel>
            <Input type="file" pt={1} />
            <FormHelperText>Please upload a clear photo of your driver's license or government ID</FormHelperText>
          </FormControl>
          
          <Divider my={4} />
          
          <Heading size="sm" mb={4}>Credit Card Details</Heading>
          
          <FormControl isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input placeholder="•••• •••• •••• ••••" />
          </FormControl>
          
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <FormControl isRequired>
              <FormLabel>Expiration Date</FormLabel>
              <Input placeholder="MM/YY" />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>CVV</FormLabel>
              <Input placeholder="123" maxLength={4} />
            </FormControl>
          </Stack>
          
          <FormControl isRequired>
            <FormLabel>Name on Card</FormLabel>
            <Input placeholder="Name as it appears on card" />
          </FormControl>
          
          <FormControl isRequired mt={4}>
            <Checkbox>I authorize charges for damages, overages, or losses as outlined in the rental agreement</Checkbox>
          </FormControl>
          
          <HStack spacing={4}>
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button colorScheme="red" onClick={nextStep}>Next: Agreement</Button>
          </HStack>
        </VStack>
      )}
      
      {step === 4 && (
        <VStack spacing={6} align="stretch">
          <Heading size="md">Step 4: Rental Agreement</Heading>
          
          <Box bg="black" p={4} borderRadius="md" height="300px" overflowY="auto">
            <Text fontSize="sm">
              <strong>EQUIPMENT RENTAL AGREEMENT</strong><br/><br/>
              
              This Equipment Rental Agreement (the "Agreement") is made and entered into as of the date of submission, by and between Dingo Rentals ("Lessor") and the undersigned customer ("Lessee").<br/><br/>
              
              <strong>1. EQUIPMENT:</strong> Lessor hereby leases to Lessee a Dingo TX1000 compact utility loader (the "Equipment").<br/><br/>
              
              <strong>2. TERM:</strong> The rental term begins on the date specified in the rental request and ends on the return date specified, unless extended by mutual agreement.<br/><br/>
              
              <strong>3. RENTAL RATE:</strong> Lessee agrees to pay the rental rate selected in this form, plus any applicable taxes, fees, and security deposit.<br/><br/>
              
              <strong>4. SECURITY DEPOSIT:</strong> A security deposit will be pre-authorized on Lessee's credit card and will be released upon satisfactory return of the Equipment.<br/><br/>
              
              <strong>5. PAYMENT:</strong> Payment is due in full prior to taking possession of the Equipment.<br/><br/>
              
              <strong>6. USE OF EQUIPMENT:</strong> Lessee shall use the Equipment in a careful and proper manner and shall comply with all laws, ordinances, and regulations relating to the possession, use, or maintenance of the Equipment.<br/><br/>
              
              <strong>7. MAINTENANCE AND REPAIR:</strong> Lessee shall maintain the Equipment in good operating condition.<br/><br/>
              
              <strong>8. DAMAGE TO EQUIPMENT:</strong> Lessee shall be responsible for any damage to the Equipment during the rental period.<br/><br/>
              
              <strong>9. INSURANCE:</strong> Lessee shall maintain insurance covering all risk of loss to the Equipment.<br/><br/>
              
              <strong>10. LIABILITY:</strong> Lessee shall indemnify and hold Lessor harmless from all claims, losses, and damages during the rental period.<br/><br/>
              
              <strong>11. DEFAULT:</strong> If Lessee fails to perform any obligation under this Agreement, Lessor shall have the right to terminate this Agreement and take possession of the Equipment.<br/><br/>
            </Text>
          </Box>
          
          <FormControl isRequired>
            <Checkbox>I have read, understand, and agree to the terms and conditions of the rental agreement</Checkbox>
          </FormControl>
          
          <FormControl isRequired>
            <Checkbox>I understand that this is a request for rental and final approval is at the discretion of Dingo Rentals</Checkbox>
          </FormControl>
          
          <FormControl>
            <FormLabel>Digital Signature</FormLabel>
            <Input placeholder="Type your full legal name as signature" isRequired />
            <FormHelperText>By typing your name, you are electronically signing this agreement</FormHelperText>
          </FormControl>
          
          <HStack spacing={4}>
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button 
              type="submit" 
              colorScheme="red" 
              isLoading={isSubmitting}
              loadingText="Submitting"
            >
              Submit Rental Request
            </Button>
          </HStack>
        </VStack>
      )}
    </Box>
  )
} 