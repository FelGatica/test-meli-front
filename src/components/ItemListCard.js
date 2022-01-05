import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import {amountFormatterWithoutDecimals, amountFormatterDecimals} from '../utilities/formatAmount';

export default function ItemListCard({id, title, price, picture, condition, free_shipping, onClick}) {
    const styles = {
        card: { cursor: 'pointer', display: 'flex', paddingY: 5, paddingX: 5, marginY: 1 },
        box_content: { display: 'flex', flexDirection: 'column' }
    };

    return (
        <Card id={id} sx={styles.card} onClick={onClick}>
            <CardMedia
                component="img"
                sx={{ width: 170 }}
                image={picture}
                alt="picture"
            />
            <Box sx={styles.box_content}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box sx={{ display: 'flex'}}>
                        <Typography component="div" variant="h5"> {amountFormatterWithoutDecimals(price)} </Typography>
                        <Typography component="sup" variant="subtitle2"> {amountFormatterDecimals(price)} </Typography>
                    </Box>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        {condition==='new'? 'Nuevo':'Usado'} {free_shipping? " - Envio Gratis" : null}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}
