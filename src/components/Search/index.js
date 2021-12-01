import React from "react";
import { useLocation } from "wouter";
import useForm from "../../hooks/searchHook";
import {
  Input,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Select,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { MagnifyingGlass, Gear, ArrowSquareDown, Check } from "phosphor-react";
import Info from "./info";
import toast from "react-hot-toast";

const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm({
  initialKeyword = "",
  initialRating = RATINGS[0],
}) {
  const [_, pushLocation] = useLocation();
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
    toast("The search filter has been changed", {
      icon: "🔍",
      style: {
        borderRadius: "10px",
        background: "#151515",
        color: "#fff",
      },
    });
  };

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const bg = useColorModeValue("gray.200", "#151515");
  const color = useColorModeValue("gray.400", "gray.600");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<MagnifyingGlass size={24} />}
          />
          <Input
            variant="filled"
            type="text"
            placeholder="Happy Holidays!"
            onChange={handleChange}
            borderColor={color}
          />
          <Tooltip label="Search settings" hasArrow aria-label="A tooltip">
            <InputRightElement width="3.5rem">
              <Button variant="ghost" onClick={onOpen} size="sm">
                <Gear size="20" />
              </Button>
            </InputRightElement>
          </Tooltip>
        </InputGroup>
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent bg={bg} border="1px" borderColor="gray.600">
            <ModalHeader>Search filter:</ModalHeader>
            <ModalCloseButton />
            <ModalBody mt="3" mb="4">
              <Select
                value={rating}
                onChange={handleChangeRating}
                mb="2"
                borderColor={color}
                icon={<ArrowSquareDown />}
              >
                {RATINGS.map((rating) => (
                  <option key={rating}>{rating}</option>
                ))}
              </Select>
              <Info />
            </ModalBody>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
}
