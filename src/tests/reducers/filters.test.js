import moment from 'moment';
import filtersReducer from './../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@init'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set text value', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', textValue: 'avi'});
    expect(state.text).toBe('avi');
})

test('should set start date', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date: moment(1000)});
    expect(state.startDate).toEqual(moment(1000));
})

test('should set end date', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: moment(2000)});
    expect(state.endDate).toEqual(moment(2000));
})