import moment from 'moment';

export default [
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