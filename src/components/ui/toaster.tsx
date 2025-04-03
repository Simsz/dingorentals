"use client"

import { useToast as useChakraToast } from "@chakra-ui/react"
import { useCallback } from "react"

// Create a custom hook for toast
export const useToast = () => {
  const chakraToast = useChakraToast()
  
  const success = useCallback((props: { title: string; description?: string }) => {
    return chakraToast({
      title: props.title,
      description: props.description,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right"
    })
  }, [chakraToast])
  
  const error = useCallback((props: { title: string; description?: string }) => {
    return chakraToast({
      title: props.title,
      description: props.description,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-right"
    })
  }, [chakraToast])
  
  const loading = useCallback((props: { title: string; description?: string }) => {
    return chakraToast({
      title: props.title,
      description: props.description,
      status: "loading",
      duration: null,
      isClosable: false,
      position: "bottom-right"
    })
  }, [chakraToast])
  
  return {
    success,
    error,
    loading
  }
}

// Empty component for compatibility
export const Toaster = () => null;
