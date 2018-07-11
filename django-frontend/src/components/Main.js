import React, { Component } from 'react';
import { withRouter} from 'react-router';

import { MainWrapper, ButtonMainWrapper, Button } from './primitives/Primitives' 
import './primitives/animations.css'

class Main extends Component {
    signInRoute() {
        this.props.history.push(`/signin`);
    }

    signUpRoute() {
        this.props.history.push(`/signup`);
    }

    render(){
        return (
            <MainWrapper>
                <ButtonMainWrapper>
                    <Button onClick={()=> this.signInRoute()} className="hvr-radial-out hvr-bounce-in">Sign In</Button>
                </ButtonMainWrapper>
                <ButtonMainWrapper>
                    <Button onClick={()=> this.signUpRoute()} className="hvr-radial-out hvr-bounce-in">Sign Up</Button>
                </ButtonMainWrapper>
            </MainWrapper>
        );
    }
};

export default withRouter(Main);