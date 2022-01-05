import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import {amountFormatterWithoutDecimals, amountFormatterDecimals} from '../utilities/formatAmount';

export default function ItemCard({id, title, description, picture, price, sold_quantity, condition}) {

    const styles = {
        card: { display: 'flex', paddingY: 5, marginY: 1 },
        box_container: { flex: '1 0 auto', display: 'flex', maxwidth: '100%', flexDirection: 'column' },
        box_product: {  flex: '1 1 auto', display: 'flex' },
        product_card_media: { flex: '1 0 auto', width: 370, height: 370, padding: 5 },
        product_box_info: { flex: '1 0 auto', display: 'flex', flexDirection: 'column' },
        product_card_content: { flex: '1 0 auto' },
        box_description: { display: 'flex', flexDirection: 'column', padding: 5 },
        description_card_content: { flex: '1 0 auto' },
        description_title: { mb: 0.5 },
        description_text: {width: 800}
    };

    return (
        <Card id={id} maxwidth="lg" sx={styles.card} >
            <Box sx={styles.box_container}>
                <Box sx={styles.box_product}>
                    <CardMedia
                        component="img"
                        sx={styles.product_card_media}
                        image={picture}
                        alt="picture"
                    />
                    <Box sx={styles.product_box_info}>
                        <CardContent sx={styles.product_card_content}>
                            <Typography variant="subtitle2" sx={{ mb: 0.5 }} color="text.secondary" component="div">
                                {condition==='new'? 'Nuevo':'Usado'} - {sold_quantity} vendidos
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 1.5, width: 300 }} component="div">
                                {title}
                            </Typography>
                            <Box sx={{ mb:5, display: 'flex'}}>
                                <Typography component="div" variant="h3"> {amountFormatterWithoutDecimals(price)} </Typography>
                                <Typography component="sup" variant="h5"> {amountFormatterDecimals(price)} </Typography>
                            </Box>
                            <Button variant="contained" disableElevation sx={{ mt: 1.5, width: 200 }}>Comprar</Button>
                        </CardContent>
                    </Box>
                </Box>
                <Box sx={styles.box_description}>
                    <CardContent sx={styles.description_card_content}>
                        <Typography variant="h5" sx={styles.description_title} component="div">
                            Descripción del producto
                        </Typography>
                        <Typography variant="body1" sx={styles.description_text} color="text.secondary" component="div">
                            {description.split("\n").map((i, key) => {
                                return <p key={key}>{i}</p>;
                            })}
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
        </Card>
    )
}
