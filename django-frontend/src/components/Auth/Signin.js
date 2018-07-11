import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SignInWrapper, FieldWrapper, ButtonWrapper, Button, Label, Title } from '../primitives/Primitives'
import { withRouter } from 'react-router'

let Signin = props => {
    const { handleSubmit } = props;

    const notesRoute = () => {
        props.history.push(`/notes`);
    }
        return (
            <SignInWrapper>
                <Title>SIGN-IN</Title>
                <form onSubmit={handleSubmit}>
                    <FieldWrapper>
                        <Label htmlFor="email">Email</Label>
                        <Field name="email" component="input" type="email" />
                    </FieldWrapper> 
                    <FieldWrapper>
                        <Label htmlFor="password">Password</Label>
                        <Field name="password" component="input" type="text" />
                    </FieldWrapper>
                    <ButtonWrapper> 
                        <Button type="submit" onClick={()=> notesRoute()} className="hvr-radial-out hvr-bounce-in">Sign In</Button>
                    </ButtonWrapper>   
                </form>
            </SignInWrapper>
        );
}

Signin = reduxForm({
    form: 'signin'
})(Signin)

export default withRouter(Signin);