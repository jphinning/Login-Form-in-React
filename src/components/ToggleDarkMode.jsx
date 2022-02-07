import React from "react"
import { Button } from "@chakra-ui/react"
import { Flex, useColorMode } from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ToggleDarkMode = () => {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Flex justify='flex-end' m='5' gap='6px'>
      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Dark Mode'
        fontSize='20px'
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default ToggleDarkMode