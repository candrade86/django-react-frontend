import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import { TestWrapper } from '../primitives/Primitives';

let Signin = props => {
    const { handleSubmit } = props

        return (
            <div>
                <h1>SIGN-IN</h1><hr/>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div> 
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="text" />
                    </div> 
                    <button type="submit">Sign In</button>   
                </form>
            </div>
        );
}

Signin = reduxForm({
    form: 'signin'
})(Signin)

export default Signin;