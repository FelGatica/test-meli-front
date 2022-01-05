import React, { useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
// *** Components **** //
import ItemListCard from '../components/ItemListCard';
import SearchBar from '../components/SearchBar'
// *** Store **** //
import { searchItems } from '../store/searchItemsStore';

export default function ItemsScreen() {
    
    const navigation = useNavigate();
    let [searchParams] = useSearchParams();
    const [searchText] = useState(searchParams.get('search'));
    const [breadcrumb, setBreadcrumb] = useState('');
    const [items, setItems] = useState();

    useEffect(() => {
        callSearch(searchText);
    }, []);

    const callSearch = (toSearch) => {
        searchItems(toSearch).then((data) => {
            if (data) {
                setItems(data.items);
                setBreadcrumb(data.breadcrumb);
            }
        });
    };

    const handleOnClick = (id) => {
        const path = '/items/'+id;
        navigation(path, { state: {breadcrumb: breadcrumb }});
    };

    const handleOnSearch = (toSearch) => {
        if (toSearch.length > 0) {
            setItems(null);
            setBreadcrumb('');
            callSearch(toSearch);
            navigation({ 
                pathname: '/items', 
                search: `?${createSearchParams({
                    search: toSearch
                })}` 
            });
        }
    };

    return (
        <>
        <SearchBar onSearch={handleOnSearch}/>
        <Container sx={{mt:1}} maxWidth="lg">
            <Typography variant="body2" color="text.secondary">{breadcrumb}</Typography>
        </Container>
        <Container maxWidth="lg">
            {
            items? items.map( function (item) {
                return <ItemListCard 
                            key={item.id}
                            title={item.title}
                            free_shipping={item.free_shipping}
                            id={item.id}
                            condition={item.condition}
                            onClick={() => handleOnClick(item.id)}
                            picture={item.picture}
                            price={item.price.amount} />
                }) : null
            }
        </Container>
        </>
    )
}
