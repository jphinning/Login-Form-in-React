import { React, useState } from "react"
import { Button } from "@chakra-ui/react"
import { Flex, useColorMode, Spacer } from "@chakra-ui/react"
import { IconButton, CircularProgress } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import axios from "axios"

const ToggleDarkMode = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  return (
    <Flex m='5' gap='6px'>
      <Button colorScheme={"red"} variant={"solid"}
        onClick={async () => {
          setIsLoadingDelete(true)
          try {
            await axios.delete(`https://aqueous-coast-43643.herokuapp.com/login/` || `http://localhost:3001/login/`)
            setIsLoadingDelete(false)
            window.location.reload()
          } catch (error) {
            console.log(error)
          }
        }}
      > 
        {isLoadingDelete ? (
          <CircularProgress isIndeterminate size="15px" color="red" />
        ) : (
          'Delete All Logs'
        )}
      </Button>
      <Spacer/>
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