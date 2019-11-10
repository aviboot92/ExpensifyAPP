import filtersResducer from '../../reducers/filters';
import moment from 'moment';

test('should give defaul redux state', () => {
    const state = filtersResducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '', sortBy: 'date', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('sort by amount is tested', ()=>{
    const state = filtersResducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('sort by date is tested', ()=>{
    const state = filtersResducer(undefined, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('set start date',()=>{
    const state = filtersResducer(undefined, {type:'SET_START_DATE',date: moment(5).startOf('month')});
    expect(state.startDate).toEqual(moment(5).startOf('month'));
})

test('set end date',()=>{
    const state = filtersResducer(undefined, {type:'SET_END_DATE',date: moment(5).startOf('month')});
    expect(state.endDate).toEqual(moment(5).startOf('month'));
})

test('set text filter',()=>{
    const state = filtersResducer(undefined, {type:'SET_TEXT_FILTER',textValue: 'er'});
    expect(state.text).toEqual('er');
})