import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should give the remove action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '123abc'});
})

test('should give edit action object', () => {
    const action = editExpense("1234abc", {
        descreption: 'April fool',
        note: 'Dont fool',
        amount: '1234'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234abc',
        updates: {
            descreption: 'April fool',
            note: 'Dont fool',
            amount: '1234'
        }
    });
})

test('should give new object with some data and id', () => {
    const action = addExpense({descreption: 'April fool', note: 'Dont fool', amount: '1234', createdAt: 1000});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            descreption: 'April fool',
            note: 'Dont fool',
            amount: '1234',
            createdAt: 1000
        }
    });
})

test('should give new object with default data', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            descreption : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
        }
    })
})