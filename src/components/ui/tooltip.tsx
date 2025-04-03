"use client"

import { Tooltip as ChakraTooltip, TooltipProps as ChakraTooltipProps } from "@chakra-ui/react"
import * as React from "react"

// Create a custom tooltip interface
export interface TooltipProps {
  showArrow?: boolean
  content: React.ReactNode
  disabled?: boolean
  children: React.ReactNode
  placement?: ChakraTooltipProps['placement']
  offset?: ChakraTooltipProps['offset']
  gutter?: ChakraTooltipProps['gutter']
  bg?: ChakraTooltipProps['bg']
  color?: ChakraTooltipProps['color']
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow = true,
      children,
      disabled,
      content,
      ...rest
    } = props

    if (disabled) return <>{children}</>

    return (
      <ChakraTooltip 
        hasArrow={showArrow}
        label={content}
        ref={ref}
        {...rest}
      >
        {children}
      </ChakraTooltip>
    )
  },
)
