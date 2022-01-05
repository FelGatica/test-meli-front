import axios from 'axios';
import validateAuthor from '../utilities/validateAuthor';
import makeBreadcrumb from '../utilities/makeBreadcrumb';
import * as constants from '../utilities/constants';

export const searchItems = async (query) => {
    console.log('CALL SEARCH ITEMS');
    const PATH = `${constants.PATH_BASE}/api/items?limit=4&q=${query}`;
    try {
        const response = await axios.get(PATH);
        const { data, status } = response;
        console.log('searchItemsStore Response Status Call ---> ', status);
        if (!validateAuthor(data.author))
            throw new Error('Not valid author');

        const { categories } = data;
        let breadcrumb = [];
        if (categories)
            breadcrumb = makeBreadcrumb(categories[0].breadcrumb);
        return { items: data.items, breadcrumb: breadcrumb.join(' / ') };
    } catch (error) {
        console.log('searchItemsStore Error ---> ', error);
        return;
    }
};

