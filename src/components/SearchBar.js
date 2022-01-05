import React, { useState } from 'react'
import { Box, Container, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

export default function SearchBar({onSearch}) {
    const [searchText, setSearchText] = useState();

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleOnKeyPress = (e) => {
        if (e.charCode === 13)
            onSearch(searchText);
    }

    return (
        <Container maxWidth='xl' disableGutters sx={{paddingY: 1, background: "#fff159"}}>
            <Container maxWidth='lg' disableGutters >
                <Box component="div" sx={{display: 'flex', marginX: 20}}>
                    <Box sx={{paddingX: 5}}>
                        <img width={70} src={process.env.PUBLIC_URL + '/logo.png'} />
                    </Box>
                    <FormControl sx={{ width: '85ch' }} variant="outlined">
                        <OutlinedInput 
                            sx={{background: 'white', height: 40, marginTop: 1}} 
                            size="small" fullWidth placeholder='Nunca dejes de buscar' 
                            onChange={handleChangeSearch} 
                            onKeyPress={handleOnKeyPress}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { onSearch(searchText)}}
                                    edge="end"
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                              }
                            
                            />
                    </FormControl>
                </Box>
            </Container>
        </Container>
    )
}
