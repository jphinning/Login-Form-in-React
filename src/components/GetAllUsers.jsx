import { React, useState } from "react"
import { useEffect } from "react";
import { Center, Flex, List, ListItem, Text, Spacer, IconButton } from "@chakra-ui/react";
import { InfoIcon, DeleteIcon, SpinnerIcon } from '@chakra-ui/icons'
import axios from "axios"


const GetAllUsers = ({submmitButtonClicked}) => {
  const [users, setUsers] = useState([])
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    const allUsers = await axios.get("https://aqueous-coast-43643.herokuapp.com/login" || "http://localhost:3001/login")
    setUsers(allUsers.data)
  }, [submmitButtonClicked, deleteButtonClicked])

  return (
    <Center>
      <List>
        {users.map(user => {
          return (
            <ListItem p={5} my={5} 
            borderWidth={2} 
            borderRadius={10}
            boxShadow="lg" 
            borderColor={"teal.500"} 
            maxWidth="600px"
            key={user._id}
            >
              <Flex> 
                <InfoIcon mx={"2"}/>
                <Text fontWeight={"bold"}>User: {user.user}</Text>
                <Spacer />
                <IconButton
                  h={"20px"} w={"20px"}
                  colorScheme='teal'
                  variant={"ghost"}
                  icon={isLoading ? <SpinnerIcon /> : <DeleteIcon />}
                  onClick={async() => {
                    setDeleteButtonClicked(true)
                    setIsLoading(true)
                    try {
                      await axios.delete(`https://aqueous-coast-43643.herokuapp.com/login/${user._id}` || `http://localhost:3001/login/${user._id}`)
                      setDeleteButtonClicked(false)
                      setIsLoading(false)
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                />
              </Flex>
              <Text as="sub">Description: {user.password}</Text> 
            </ListItem>
          )
        })}
      </List> 
    </Center>
  )
}

export default GetAllUsers

