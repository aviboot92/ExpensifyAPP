import moment from 'moment';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';

test('setting text filter value manually', () => {
    const action = setTextFilter("bill");
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        textValue:'bill'
    })
})

test('setting text filter value dynamic', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        textValue:''
    })
})

test('sortByAmount', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('sortByDate', () =>{
    expect(sortByDate()).toEqual({
        type:"SORT_BY_DATE"
    })
})

test('setStartDate', ()=>{
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('setEndDate', ()=>{
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})