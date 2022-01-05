import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
// *** Components **** //
import SearchBar from '../components/SearchBar';

export default function SearchScreen() {
    const navigation = useNavigate();

    const handleOnSearch = (searchText) => {
        if (searchText.length > 0) {
            navigation({ 
                pathname: '/items', 
                search: `?${createSearchParams({
                    search: searchText
                })}` 
            });
        }
    };

    return (
        <SearchBar onSearch={handleOnSearch} />
    )
}
