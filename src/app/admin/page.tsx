'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AdminAuth } from '@/components/AdminAuth'

interface RentalRequest {
  id: string
  customerName: string
  rentalType: string
  startDate: string
  endDate: string
  status: 'pending' | 'approved' | 'rejected'
}

export default function AdminPage() {
  const [selectedRequest, setSelectedRequest] = useState<RentalRequest | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Mock data for rental requests
  const rentalRequests: RentalRequest[] = [
    {
      id: 'REQ-001',
      customerName: 'John Smith',
      rentalType: 'Daily',
      startDate: '2023-11-15',
      endDate: '2023-11-16',
      status: 'pending',
    },
    {
      id: 'REQ-002',
      customerName: 'Jane Doe',
      rentalType: 'Weekly',
      startDate: '2023-11-20',
      endDate: '2023-11-27',
      status: 'approved',
    },
    {
      id: 'REQ-003',
      customerName: 'Bob Johnson',
      rentalType: 'Hourly (4hrs)',
      startDate: '2023-11-18',
      endDate: '2023-11-18',
      status: 'rejected',
    },
    {
      id: 'REQ-004',
      customerName: 'Alice Brown',
      rentalType: 'Monthly',
      startDate: '2023-12-01',
      endDate: '2024-01-01',
      status: 'pending',
    },
  ]

  const pendingRequests = rentalRequests.filter(req => req.status === 'pending')
  const approvedRequests = rentalRequests.filter(req => req.status === 'approved')
  const rejectedRequests = rentalRequests.filter(req => req.status === 'rejected')

  const viewDetails = (request: RentalRequest) => {
    setSelectedRequest(request)
    onOpen()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'yellow'
      case 'approved':
        return 'green'
      case 'rejected':
        return 'red'
      default:
        return 'gray'
    }
  }

  const RentalTable = ({ requests }: { requests: RentalRequest[] }) => (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Customer</Th>
          <Th>Rental Type</Th>
          <Th>Start Date</Th>
          <Th>End Date</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {requests.map((request) => (
          <Tr key={request.id}>
            <Td>{request.id}</Td>
            <Td>{request.customerName}</Td>
            <Td>{request.rentalType}</Td>
            <Td>{request.startDate}</Td>
            <Td>{request.endDate}</Td>
            <Td>
              <Badge colorScheme={getStatusColor(request.status)}>
                {request.status.toUpperCase()}
              </Badge>
            </Td>
            <Td>
              <Button size="sm" onClick={() => viewDetails(request)}>
                View
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )

  const handleApprove = () => {
    // In a real app, this would send an API request to update the database
    console.log(`Approving request: ${selectedRequest?.id}`)
    onClose()
  }

  const handleReject = () => {
    // In a real app, this would send an API request to update the database
    console.log(`Rejecting request: ${selectedRequest?.id}`)
    onClose()
  }

  const adminContent = (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />

      <Container maxW="container.xl" flex="1" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading mb={2}>Rental Admin Dashboard</Heading>
            <Text color="gray.400">Manage equipment rental requests</Text>
          </Box>

          <Tabs colorScheme="red">
            <TabList>
              <Tab>Pending ({pendingRequests.length})</Tab>
              <Tab>Approved ({approvedRequests.length})</Tab>
              <Tab>Rejected ({rejectedRequests.length})</Tab>
              <Tab>All ({rentalRequests.length})</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {pendingRequests.length === 0 ? (
                  <Text>No pending requests</Text>
                ) : (
                  <RentalTable requests={pendingRequests} />
                )}
              </TabPanel>
              <TabPanel>
                {approvedRequests.length === 0 ? (
                  <Text>No approved requests</Text>
                ) : (
                  <RentalTable requests={approvedRequests} />
                )}
              </TabPanel>
              <TabPanel>
                {rejectedRequests.length === 0 ? (
                  <Text>No rejected requests</Text>
                ) : (
                  <RentalTable requests={rejectedRequests} />
                )}
              </TabPanel>
              <TabPanel>
                <RentalTable requests={rentalRequests} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>Rental Request Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedRequest && (
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontWeight="bold" color="gray.300">Request ID:</Text>
                  <Text>{selectedRequest.id}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.300">Customer:</Text>
                  <Text>{selectedRequest.customerName}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.300">Rental Type:</Text>
                  <Text>{selectedRequest.rentalType}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.300">Start Date:</Text>
                  <Text>{selectedRequest.startDate}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.300">End Date:</Text>
                  <Text>{selectedRequest.endDate}</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.300">Status:</Text>
                  <Badge colorScheme={getStatusColor(selectedRequest.status)}>
                    {selectedRequest.status.toUpperCase()}
                  </Badge>
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.300">Customer Information:</Text>
                  <Text>Phone: (555) 123-4567</Text>
                  <Text>Email: customer@example.com</Text>
                  <Text>Address: 123 Main St, Anytown, USA</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color="gray.300">Payment Information:</Text>
                  <Text>Card ending in: ****4567</Text>
                  <Text>Security Deposit: $500 (pre-authorized)</Text>
                </Box>
              </VStack>
            )}
          </ModalBody>

          <ModalFooter>
            {selectedRequest?.status === 'pending' && (
              <HStack spacing={4}>
                <Button colorScheme="red" onClick={handleReject}>
                  Reject
                </Button>
                <Button colorScheme="green" onClick={handleApprove}>
                  Approve
                </Button>
              </HStack>
            )}
            {selectedRequest?.status === 'approved' && (
              <Button colorScheme="red" onClick={handleReject}>
                Cancel Approval
              </Button>
            )}
            {selectedRequest?.status === 'rejected' && (
              <Button colorScheme="green" onClick={handleApprove}>
                Reconsider
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Footer />
    </Box>
  )

  return <AdminAuth>{adminContent}</AdminAuth>
} 