import * as constants from './constants';

const validateAuthor = (author) => {
    return author && author.name && author.lastname
        && author.name === constants.AUTHOR_NAME
        && author.lastname === constants.AUTHOR_LASTNAME;
}

export default validateAuthor;