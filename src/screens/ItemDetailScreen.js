import React, { useEffect, useState } from 'react'
import { createSearchParams, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
// *** Components **** //
import ItemCard from '../components/ItemCard';
import SearchBar from '../components/SearchBar';
// *** Store **** //
import {getItem} from '../store/getItemStore';

export default function ItemDetailScreen() {
    const navigation = useNavigate();
    const { state } = useLocation();
    const {id} = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        getItem(id).then((data) => {
            setItem(data);
        });
    }, []);

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
        <>
        <SearchBar onSearch={handleOnSearch} />
        <Container sx={{mt:1}} maxWidth="lg">
            <Typography variant="body2" color="text.secondary">{state.breadcrumb}</Typography>
        </Container>
        <Container maxwidth="lg">
            {   item?
                <ItemCard 
                    title={item.title}
                    sold_quantity={item.sold_quantity}
                    id={item.id}
                    picture={item.picture}
                    price={item.price?.amount}
                    description={item.description} /> : null
            }
        </Container>
        </>
    )
}
