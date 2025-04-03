'use client'

import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  VStack,
  Container,
} from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'

interface AuthProps {
  children: React.ReactNode
}

export function AdminAuth({ children }: AuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, this would check for a valid session
    // For now, we'll simulate checking authentication status
    const checkAuth = () => {
      // Mock authentication check
      const hasSession = localStorage.getItem('admin_authenticated') === 'true'
      setIsAuthenticated(hasSession)
      setIsLoading(false)
    }
    
    checkAuth()
  }, [])

  const handleLogin = () => {
    // In a real implementation, this would redirect to Cloudflare Zero Trust login
    // with Google Auth as the provider.
    // For demo purposes, we'll simulate successful authentication
    
    // Simulate authentication delay
    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem('admin_authenticated', 'true')
      setIsAuthenticated(true)
      setIsLoading(false)
    }, 1500)
    
    // In production, you would redirect to Cloudflare Access login:
    // window.location.href = 'https://yourdomain.cloudflareaccess.com/login'
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <Center h="100vh">
        <Text>Loading...</Text>
      </Center>
    )
  }

  if (!isAuthenticated) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="black">
        <Container maxW="md">
          <VStack spacing={8} p={8} bg="gray.900" borderRadius="lg" boxShadow="xl">
            <Heading size="lg">Admin Login Required</Heading>
            <Text align="center">
              Please sign in with your authorized Google account to access the admin dashboard.
            </Text>
            <Button 
              leftIcon={<FaGoogle />} 
              colorScheme="red" 
              size="lg" 
              onClick={handleLogin}
              width="full"
            >
              Sign in with Google
            </Button>
          </VStack>
        </Container>
      </Box>
    )
  }

  return (
    <Box>
      {/* Admin authenticated header */}
      <Box bg="gray.900" p={2} borderBottom="1px" borderColor="gray.800">
        <Container maxW="container.xl">
          <Box display="flex" justifyContent="flex-end">
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={handleLogout}
              colorScheme="red"
            >
              Logout
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Render authenticated content */}
      {children}
    </Box>
  )
} 