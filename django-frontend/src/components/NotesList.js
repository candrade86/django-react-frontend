import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

class NotesList extends Component {

render(){
    return (
        <div>
        {console.log(this.props.notes)}
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