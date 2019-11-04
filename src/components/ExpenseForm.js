import React from 'react'
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {

    state = {
        descreption: "",
        amount: "",
        note: "",
        createdAt: moment(),
        calendarFocused: false,
        error: false
    }

    onDescreptionChange = (e) => {
        const descreption = e.target.value;
        this.setState((prevState) => {
            return { descreption }
        });
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onNoteChange = (e) => {
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.descreption || !this.state.amount) {
            this.setState((prevState) => ({
                ...prevState,
                error: true
            }))
        } else {
            if (this.state.error) {
                this.setState((prevState) => ({
                    ...prevState,
                    error: false
                }))
            }
            this.props.onSubmit({
                descreption: this.state.descreption,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
            
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>Please give right descreption and amount.</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Descreption"
                        autoFocus
                        value={this.state.descreption}
                        onChange={this.onDescreptionChange} />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange} />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange
                        ={() => false} />

                    <textarea
                        type="textArea"
                        placeholder="Note, It's just a descreption of your expense. (OPTIONAL!)"
                        value={this.state.note}
                        onChange={this.onNoteChange}></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}