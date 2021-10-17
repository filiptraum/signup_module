const itemsData = [
    {
        id: 'day',
        placeholder: 'DD',
        conditions: {
            length: 2,
            max: 31,
            min: 1
        }
    },
    {
        id: 'month',
        placeholder: 'MM',
        conditions: {
            length: 2,
            max: 12,
            min: 1
        }
    },
    {
        id: 'year',
        maxLength: 4,
        placeholder: 'YYYY',
        conditions: {
            length: 4,
            max: 2021,
            min: 1900
        }
    }
];

export default itemsData;