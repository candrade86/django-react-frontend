import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

import { Title } from './primitives/Primitives'

class NotesList extends Component {
   componentDidMount() {
       this.props.getNotes()
       console.log(this.props)
   }
render(){
    return (
        <div>
            <Title> I need a connection!! </Title>
        {console.log(this.props)}
        {this.props.notes.map((note, i) => {
            return (
                <Fragment key={i}>
                    <div>
                        {note.title} {note.content}/>
                    </div>
                </Fragment>    
            );
        })};
        </div>
    );
} 
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, {getNotes})(NotesList);