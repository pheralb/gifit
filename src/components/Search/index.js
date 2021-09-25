import React from "react";
import { useLocation } from "wouter";
import useForm from "../../hooks/searchHook";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Select,
  chakra,
  useColorModeValue,
  Divider,
  useToast 
} from "@chakra-ui/react";
import { MagnifyingGlass, Gear, ArrowSquareDown, Check } from "phosphor-react";
import Info from './info';


const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm({
  initialKeyword = "",
  initialRating = RATINGS[0],
}) {
  const [_, pushLocation] = useLocation();
  const toast = useToast()
  const { keyword, rating, changeKeyword, changeRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const onSubmit = ({ keyword }) => {
    if (keyword !== "") {
      // navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}`);
    }
  };

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value });
    toast({
      title: "You have changed the rating filter",
      status: "warning",
      duration: 4000,
      isClosable: true,
    })
  };

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const bg = useColorModeValue("gray.200", "#151515");
  const color = useColorModeValue("gray.600", "gray.600");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<MagnifyingGlass size={24} />}
          />
          <Input
            type="text"
            placeholder="Type a gif here :)"
            onChange={handleChange}
            borderColor={color}
          />{" "}
        </InputGroup>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent bg={bg}>
            <ModalHeader>Settings</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <chakra.h1 mb="2">Search filter:</chakra.h1>
              <Select
                value={rating}
                onChange={handleChangeRating}
                mb="2"
                borderColor={color}
                icon={<ArrowSquareDown/>}
              >
                {RATINGS.map((rating) => (
                  <option key={rating}>{rating}</option>
                ))}
              </Select>
              <Info />              
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" leftIcon={<Check />} variant="ghost" mr={3} onClick={onClose}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
      <Button onClick={onOpen} variant="ghost" leftIcon={<Gear size="25" />}>
        Settings
      </Button>
    </>
  );
}
