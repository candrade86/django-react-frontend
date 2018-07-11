import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SignUpWrapper, FieldWrapper, ButtonWrapper, Button, Label, Title } from '../primitives/Primitives';
import { withRouter } from 'react-router';

let Signup = props => {
    const { handleSubmit } = props

    const notesRoute = () => {
        props.history.push(`/notes`);
    }
        return (
            <SignUpWrapper>
                <Title>SIGN-UP</Title>
                <form onSubmit={handleSubmit}>
                    <FieldWrapper>
                        <Label htmlFor="email">Email</Label>
                        <Field name="email" component="input" type="email" />
                    </FieldWrapper> 
                    <FieldWrapper>
                        <Label htmlFor="password">Password</Label>
                        <Field name="password" component="input" type="text" />
                    </FieldWrapper>
                    <FieldWrapper>
                        <Label htmlFor="repassword">Re-enter Password</Label>
                        <Field name="repassword" component="input" type="text" />
                    </FieldWrapper>  
                    <ButtonWrapper>
                        <Button type="submit" onClick={()=> notesRoute()} className="hvr-radial-out hvr-bounce-in">Sign Up</Button>
                    </ButtonWrapper>   
                </form>
            </SignUpWrapper>
        );
}

Signup = reduxForm({
    form: 'signup'
})(Signup)

export default withRouter(Signup);