export const amountFormatterWithoutDecimals = value => {
    if (value === '0' || !value) {
        return '$ 0';
    }
    return "$ " + value.toString().split('.')[0]
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        .replace(/^0+/g, '')
        .replace(/^\./, '');
};

export const amountFormatterWithDecimals = value => {
    if (value === '0' || !value) {
        return '$ 0';
    }
    return "$ " + value.toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        .replace(/^0+/g, '')
        .replace(/^\./, '');
};

export const amountFormatterDecimals = value => {
    if (value === '0' || !value) {
        return '';
    }
    const values = value.toString().split('.');
    if (values.length <= 1) {
        return ''
    }
    return values[1];
};