import { useState } from 'react'
import { Box, IconButton, InputAdornment, TextField, SearchIcon } from "@mui/material";

function SearchBar () {
    
    const [query, setQuery] = useState('');

    const handleInputChange = () => {

    }

    const handleSubmit = (e) => {

    };
    return (
        <Box display="flex" justifyContent="center" alignItems="center" m={2}>
            <form onSubmit={handleSubmit}>
                <TextField 
                variant="outlined"
                placeholder="Type something..."
                value={query}
                onChange={handleInputChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                fullWidth
                />
            </form>
        </Box>
    );
}

export default SearchBar;