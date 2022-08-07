import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  InputLeftElement,
  InputGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import useForm from "@/hooks/searchHook";

export default function SearchForm({ initialKeyword = "" }) {
  const navigate = useNavigate();
  const { keyword, changeKeyword } = useForm({
    initialKeyword,
  });

  const onSubmit = ({ keyword }) => {
    if (keyword !== "") {
      navigate(`/search/${keyword}`);
    }
  };

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const border = useColorModeValue("dark.300", "dark.700");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup borderColor={border} borderWidth="1px" borderRadius="10px">
          <InputLeftElement
            pointerEvents="none"
            children={<IoSearch size="22" />}
          />
          <Input
            variant="filled"
            type="text"
            placeholder="Search gifs..."
            onChange={handleChange}
            backgroundColor="transparent"
            autofocus="true"
          />
        </InputGroup>
      </form>
    </>
  );
}
