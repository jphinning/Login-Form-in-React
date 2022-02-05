//Chakra UI Imports
import { VStack, CircularProgress } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center, Box, Button } from '@chakra-ui/react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

//React Imports
import { useState } from 'react'
import { userLogin } from '../utils/mockApi'

//Components
import ErrorMessage from './ErrorMessage'

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setIsLoading(true)
    console.log(`Email: ${email} & Password: ${password}`)
    try {
      await userLogin({ email, password });
      setIsLoading(false);
      setError('')
    } catch (error) {
      setError('Invalid username or password');
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
        <Center marginTop="50">
          <Heading>Login</Heading>
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
                <FormLabel>Password</FormLabel>
                <Input 
                  type='password'
                  onChange={event => setPassword(event.currentTarget.value)}
                />
              </FormControl>
              <Button colorScheme='teal' variant="outline" mt="5" w="full" type="submit">
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </Box>
        </Center>
        


      </VStack>
    </>
  )
}

export default LoginForm