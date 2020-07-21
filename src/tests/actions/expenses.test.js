import {addExpense, removeExpense, editExpense} from './../../actions/expenses';
import uuid from 'uuid';

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({id: '123abc', type:'REMOVE_EXPENSE'})
})

test('should edit expense', () => {
    const action = editExpense('123abc', {note: 'I am update'})
    expect(action).toEqual({id: '123abc', type:'EDIT_EXPENSE', updates:{note: 'I am update'}})
})

test('should add Expense with Data', ()=>{
    const expenseData = {
        descreption : 'Coffee',
        note : 'Drink Daily',
        amount : 1090,
        createdAt : 13640
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({type: 'ADD_EXPENSE', expense:{...expenseData, id: expect.any(String)}})
})

test('should add expense without data', () =>{
    const action = addExpense();
    expect(action).toEqual({type: 'ADD_EXPENSE', expense:{
        descreption : '',
        note : '',
        amount : 0,
        createdAt : 0,
        id: expect.any(String)
    }})
})