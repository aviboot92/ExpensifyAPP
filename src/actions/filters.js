// Action Generators for Filters
const setTextFilter = (textValue = '') => ({type: 'SET_TEXT_FILTER', textValue});

const sortByAmount = () => ({type: "SORT_BY_AMOUNT"});

const sortByDate = () => ({type: "SORT_BY_DATE"});

const setStartDate = (date) => ({type: 'SET_START_DATE', date});

const setEndDate = (date) => ({type: 'SET_END_DATE', date});

export {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate};