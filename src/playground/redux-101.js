import {createStore} from 'redux';
const countReducer = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {count: 0}
        case 'SET':
            return {count: action.count}
        default:
            return state;
    }
};
const store = createStore(countReducer);

// Action Generators
const incrementCount = ({
    incrementBy = 1
} = {}) => ({type: 'INCREMENT', incrementBy});

const decrementCount = ({
    decrementBy = 1
} = {}) => ({type: 'DECREMENT', decrementBy});

const resetCount = () => ({type: 'RESET'});

const setCount = ({
    count = 0
} = {}) => ({type: 'SET', count})

// subcribe will be triggeres whenever there is a change in state. But the
// return value is a function which can be used for unsubscribe which means it
// won't be triggered when it is called.
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 50}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 100}));
