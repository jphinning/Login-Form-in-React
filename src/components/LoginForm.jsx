//Chakra UI Imports
import { VStack, CircularProgress } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center, Box, Button } from '@chakra-ui/react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

//React Imports
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

//Components
import ErrorMessage from './ErrorMessage'
import GetAllUsers from './GetAllUsers'

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setIsLoading(true)
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    try {
      const response = await axios.post("https://aqueous-coast-43643.herokuapp.com/login" || "http://localhost:3001/login", {
        user: email,
        password: password,
      })
      setIsLoading(false)
      setError('')
    } catch (error) {
      setError('User already exists');
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }
  }

  return(
    <>
      <VStack
        spacing={4}
        align='stretch'
      > 
        <Center marginTop="20px">
          <Heading color={"teal.600"} fontWeight={"bold"}>Log Reporting</Heading>
        </Center>
        
        <Center>
          <Box w="50%" p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <form onSubmit={handleSubmit}>
              {error && <ErrorMessage message={error} />}
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type='email' 
                  placeholder="test@test.com" 
                  onChange={event => setEmail(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl isRequired mt="5">
                <FormLabel>Description</FormLabel>
                <Input 
                  type='text'
                  onChange={event => setPassword(event.currentTarget.value)}
                />
              </FormControl>
              <Button colorScheme='teal' variant="outline" mt="5" w="full" type="submit">
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  'Create Log'
                )}
              </Button>
            </form>
          </Box>
        </Center>

        <GetAllUsers submmitButtonClicked={isLoading} />
      </VStack>
    </>
  )
}

export default LoginForm