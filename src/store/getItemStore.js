import axios from 'axios';
import * as constants from '../utilities/constants';
import validateAuthor from '../utilities/validateAuthor';

export const getItem = async (id) => {
    console.log('CALL FIND ITEMS');
    const PATH = `${constants.PATH_BASE}/api/items/${id}`;

    try {
        const response = await axios.get(PATH);
        const { data, status } = response;
        console.log('getItemStore Response Status Call ---> ', status);
        if (!validateAuthor(data.author))
            throw new Error('Not valid author');
        return data.item;
    } catch (error) {
        console.log('getItemStore Error ---> ', error);
        return;
    }
};