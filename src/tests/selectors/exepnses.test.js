import getVisibleExpenses from '../../selectors/expenses';

const expenses = [
    {
        id: "1",
        descreption: "Gum",
        note: "",
        amount: 195,
        createdAt: 0
    }, {
        id: "2",
        descreption: "Rent",
        note: "",
        amount: 19500000,
        createdAt: -1000
    }, {
        id: "3",
        descreption: "Credit Card",
        note: "",
        amount: 4500,
        createdAt: 1000
    }
];

test('should filter by text value',() => {
    const filter ={
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = getVisibleExpenses(expenses, filter);
    expect(result).toEqual([expenses[2], expenses[1]]);
})

