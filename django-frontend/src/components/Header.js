import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { HeaderWrapper, Text } from './primitives/Primitives';

class Header extends Component {
    mainRoute() {
        this.props.history.push(`/`);
    }
    render() {
        return (
            <HeaderWrapper onClick={()=> {this.mainRoute()}}>
                <Text>Sign Out</Text>
            </HeaderWrapper>

        );
    }
}

export default withRouter(Header);