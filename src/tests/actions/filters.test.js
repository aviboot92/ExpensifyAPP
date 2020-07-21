import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';

test('should set TextFilter', () => {
    const action = setTextFilter();
    expect(action).toEqual({type: 'SET_TEXT_FILTER', textValue: ''})
    const action2 = setTextFilter('stupid');
    expect(action2).toEqual({type: 'SET_TEXT_FILTER', textValue:'stupid'})
})

test('should give type of sort by amount', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({type: 'SORT_BY_AMOUNT'});
})

test('should give type of sort by date', ()=>{
    const action = sortByDate();
    expect(action).toEqual({type: 'SORT_BY_DATE'});
})

test('should set start date', ()=>{
    const action = setStartDate(123456);
    expect(action).toEqual({type: 'SET_START_DATE', date: 123456});
})

test('should set end date', ()=>{
    const action = setEndDate(123456);
    expect(action).toEqual({type: 'SET_END_DATE', date: 123456});
})