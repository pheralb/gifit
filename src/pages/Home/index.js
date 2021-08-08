import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input
  } from "@chakra-ui/react";
  
import { useLocation } from 'wouter';
import ListOfGifs from 'components/Gifapp/ListOfGifs';
import { useGifs } from 'hooks/useGifs';

const Home = () => {

    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`);
        console.log(keyword);
    }

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl id="email">
                    <FormLabel>Gif:</FormLabel>
                    <Input type="text" value={keyword} onChange={handleChange}/>
                    <button>BUSCAR</button>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
            </form>
            <ListOfGifs gifs={gifs} />
        </div>
    )
}

export default Home
