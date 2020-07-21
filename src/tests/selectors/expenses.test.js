import selectExpenses from '../../selectors/expenses';
import moment from 'moment'

const expenses =[{
    id: '1',
    descreption: 'Gum',
    note: '',
    amount: 100,
    createdAt: moment(0)
},{
    id: '2',
    descreption: 'Rent',
    note: '',
    amount: 10025,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    descreption: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value', ()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
})

test('should filter by start date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
})

test('should filter by endDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
})

test('should sort by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter by amount', ()=>{
    const filters = {
        text: 'e',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
})