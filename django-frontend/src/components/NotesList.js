import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

import { Title, NotesListWrapper, NoteWrapper, Text, NoteCardWrapper, NoteTitle } from './primitives/Primitives'
import Header from './Header'

class NotesList extends Component {
   componentDidMount() {
       this.props.getNotes()
       
   }
render(){
    return (
        <NotesListWrapper>
            <Header />
            <Title> Simple Notes List </Title>
        {console.log(this.props)}
        {this.props.notes.notes.map((note, i) => {
            return (
                <Fragment key={i}>
                    <NoteWrapper>
                        <NoteCardWrapper>
                            <NoteTitle>Title:</NoteTitle>
                            <Text>{note.title}</Text>
                        </NoteCardWrapper>
                        <NoteCardWrapper> 
                            <NoteTitle>Content:</NoteTitle>
                            <Text>{note.content}</Text>
                        </NoteCardWrapper>
                    </NoteWrapper>
                </Fragment>    
            );
        })};
        </NotesListWrapper>
    );
} 
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, {getNotes})(NotesList);