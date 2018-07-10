import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import { TestWrapper } from '../primitives/Primitives';

let Signup = props => {
    const { handleSubmit } = props

        return (
            <div>
                <h1>SIGN-UP</h1><hr/>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div> 
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="repassword">Re-enter Password</label>
                        <Field name="repassword" component="input" type="text" />
                    </div>  
                    <button type="submit">Sign Up</button>   
                </form>
            </div>
        );
}

Signup = reduxForm({
    form: 'signup'
})(Signup)

export default Signup;