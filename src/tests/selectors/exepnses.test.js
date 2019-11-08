import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: "1",
        descreption: "Gum",
        note: "",
        amount: 195,
        createdAt: moment(0)
    }, {
        id: "2",
        descreption: "Rent",
        note: "",
        amount: 19500000,
        createdAt: moment(0)
            .subtract(4, 'days')
            .valueOf()
    }, {
        id: "3",
        descreption: "Credit Card",
        note: "",
        amount: 4500,
        createdAt: moment(0)
            .add(4, 'days')
            .valueOf()
    }
];

test('should filter by text value', () => {
    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', ()=>{
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', ()=>{
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})
