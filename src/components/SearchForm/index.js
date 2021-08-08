import React from "react"
import { useLocation } from "wouter"
import useForm from '../../hooks/searchHook'
import { Input, InputLeftElement, InputGroup, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, useDisclosure, Select, Divider, chakra, List, ListItem, ListIcon, OrderedList, UnorderedList, Flex, Box } from "@chakra-ui/react";
import { FileSearch, Gear } from "phosphor-react";

const RATINGS = ["g", "pg", "pg-13", "r"]

export default function SearchForm({
  initialKeyword = '',
  initialRating = RATINGS[0]
}) {
  const [_, pushLocation] = useLocation()

  const {keyword, rating, changeKeyword, changeRating} = useForm({ initialKeyword, initialRating })

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}`)
    }
  }

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value })
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FileSearch size={24} />}
              />
              <Input variant="flushed" type="tel" placeholder="Type a gif here" onChange={handleChange}/> <Button onClick={onOpen} ml="2" variant="ghost"><Gear size="30"/></Button>
        </InputGroup>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <chakra.h1>Type:</chakra.h1>
          <Select value={rating} onChange={handleChangeRating} mb="2">
            {RATINGS.map((rating) => (
              <option key={rating}>{rating}</option>
            ))}
          </Select>
          <Divider mb="3"/>
          <UnorderedList>
            <ListItem p="3">G - Level 1 - Contains images that are broadly accepted as appropriate and commonly witnessed by people in a public environment.</ListItem>
            <ListItem p="3">PG - Level 2 - Contains images that are commonly witnessed in a public environment, but not as broadly accepted as appropriate.</ListItem>
            <ListItem p="3">PG13 - Level 3 - Contains images that are typically not seen unless sought out, but still commonly witnessed.</ListItem>
            <ListItem p="3">R - Level 4 (+18) - Contains images that are typically not seen unless sought out and could be considered alarming if witnessed.</ListItem>
          </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </form>
    </>
  )
}
