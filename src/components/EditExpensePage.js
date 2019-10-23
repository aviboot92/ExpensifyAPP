import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
            <p>I am Edit Expense Page: {props.match.params.id}</p>
        </div>
    );
};

export default EditExpensePage;