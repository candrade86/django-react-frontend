import React, { Component } from 'react';
import { withRouter} from 'react-router';

import { MainWrapper, ButtonMainWrapper, Button } from './primitives/Primitives' 
import './primitives/animations.css'
import axios from 'axios';
axios.defaults.withCredentials = true;

class Main extends Component {
    signInRoute() {
        this.props.history.push(`/signin`);
    }

    signUpRoute() {
        this.props.history.push(`/signup`);
    }

    componentDidMount() {
        axios
        .get('https://cryptic-crag-26999.herokuapp.com/api/notes')
        .then(res=> console.log(res))
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