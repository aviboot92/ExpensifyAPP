import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is priveleged information. Please don't share it.</p>}    
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAdmin ? <WrappedComponent {...props}/> : <p>{props.errorMsg}</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAdmin={false} info= "Hi how are you?" errorMsg="Please sign in for the usage"/>, document.getElementById('app'));