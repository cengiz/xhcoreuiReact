import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {DB_CONFIG} from '../Config/Config';
import firebase from 'firebase/app';
import 'firebase/database';
import Envanter from './Envanter';

const options = {
  tooltips: { 
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class Cengiz extends Component {
/*
    constructor(props) {
        super(props);

        //export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

        //this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG): firebase.app();//start a firebase application
        //this.database = this.app.database().ref().child('Envanterler');//Database 

        this.state = {
            notes: [],
        };
        //function binding operation
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);

    }

    componentWillMount() {
        const previousNotes = this.state.notes;
        //add new note
        this.database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                noteTitle: snap.val().noteTitle,
                noteContent: snap.val().noteContent,
            })
            //added after notes list refresh
            this.setState({
                notes: previousNotes
            })
        })

        //delete note
        this.database.on('child_removed', snap => {
            //basic logic find field id in firabase
            for (var i = 0; i < previousNotes.length; i++) {
                if (previousNotes[i].id === snap.key) {
                    previousNotes.splice(i, 1);
                }
            }
            this.setState({
                notes: previousNotes
            })
        })
    }

    addNote(note) {
        this.database.push().set({noteTitle: note.noteTitle, noteContent: note.noteContent});
    }

    removeNote(noteId) {
        this.database.child(noteId).remove();
    }
*/
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">
          <Card>
            <CardHeader>
              <div className="notesWrapper">
                <div className="notesBody" >
                    {
                        this.state.notes.map((note) => {
                            return (
                                <Envanter noteContent={note.noteContent}
                                      noteTitle={note.noteTitle}
                                      noteId={note.id}
                                      key={note.id}
                                      removeNote={this.removeNote}/>
                            )
                        })
                    }
                </div>

            </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                body
              </div>
            </CardBody>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Cengiz;
