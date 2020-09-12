import React from "react";
import Note from "./note";
import Noteboard from "./noteboard";
import NotepadMenu from "./notepadmenu";
import AddButton from "./addbutton";

import moment from "moment";
import NoteEditor from "./notepadeditor";




class Notepad extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            filtered_notes: [], //stores notes that match filter
            all_notes: [],  //stores notes fetched from indexeddb
            editor: false,   //indicates if user is editing a note rn
            editor_target: undefined,   //indicates which note user is editing
        };
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.handleEditorCancel = this.handleEditorCancel.bind(this);
        this.handleEditorSave = this.handleEditorSave.bind(this);
        this.setupEditor = this.setupEditor.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        this.initialize_db();
    }

    initialize_db(){
        let request = indexedDB.open("NotepadDB");

        request.onupgradeneeded = (e) => {
            this.db = request.result;
            this.db.createObjectStore("Notes", {autoIncrement: true});
        }

        request.onsuccess = (e) =>{
            this.db = request.result;
            this.did_initialized = true;

            /*let req = this.db.transaction("Notes", "readwrite").objectStore("Notes");
            req.put({title: "Lorem ipsum", content: "Dolor simen ament xddd", created: new Date().getTime(), edited: new Date().getTime()});
            req.put({title: "Teścior", content: "Przykładowa notatka", created: new Date().getTime(), edited: new Date().getTime()});
            req.put({title: "Alleluja i hoho", content: "no normalnie nie mam sił", created: new Date().getTime(), edited: new Date().getTime()});
            req.put({title: "Ja naprawdę", content: "chcę być tylko szczęsliwy", created: new Date().getTime(), edited: new Date().getTime()});
            req.put({title: "gówno i dupa", content: "chochoł", created: new Date().getTime(), edited: new Date().getTime()});//*/


            this.updateNotesData();    //pobiera informacje o zapisanych notatkach z lokalnej bazy

            this.db.onerror = (e) => {
                console.log("An error occured during connecting to DB: " + e.error);
            }
        }

        request.onerror = (e) => {
            console.log("An error occured during opening DB: " + e.error);
        }
    }

    deleteNote(key){
        let request = this.db.transaction("Notes", "readwrite").objectStore("Notes").delete(key);

        request.onsuccess = (e) => {
            console.log(`Succesfully deleted note #${key}`);
            this.setState({editor: false, editor_target: undefined});
            this.updateNotesData();
        }

        request.onerror = (e) => {
            console.log("Couldn't delete note");
        }
    }

    //pobranie danych notatek
    updateNotesData(){
        let data_arr = [];
        let request = this.db.transaction("Notes", "readwrite").objectStore("Notes").openCursor();

        request.onsuccess =  (e) => {
            let cursor = e.target.result;

            if(cursor){
                let temp = {};
                temp.key = cursor.primaryKey;
                temp.title = cursor.value.title;
                temp.content = cursor.value.content;
                temp.created = cursor.value.created;
                temp.edited = cursor.value.edited;
                temp.color = cursor.value.color;
                data_arr.push(temp);
                cursor.continue();
            }
            else{
                // console.log(data_arr);
                this.setState({all_notes: data_arr});
                this.handleFilterChange(this.state.filter);

            }
        }

        request.onerror = (e) => {
            console.log("Failed to fetch data");
        }
    }

    getNotes(){
        return this.state.filtered_notes.map(x => <Note key={x.key} title={x.title} content={x.content} edited={x.edited} created={x.created} color={x.color} handleDelete={this.deleteNote.bind(this, x.key)} editorActivation={this.setupEditor.bind(this, x)}/>);
    }

    addNote(){
        this.setState({editor: true});
    }

    setupEditor(target){
        this.setState({editor: true, editor_target: target});
    }

    updateNote(new_note){
        console.log(new_note);

        let request = this.db.transaction("Notes", "readwrite").objectStore("Notes").put({
            title: new_note.title,
            content: new_note.content,
            edited: new_note.edited,
            created: new_note.created,
            color: new_note.color},
            new_note.key);  //key is undefined if new note is being created - indexeddb will create it by itself

        request.onsuccess = () =>{
            console.log("Succesfully updated note")
            this.updateNotesData(); //makes app download data from db again so it is synced
        }

        request.onerror = () => {
            console.log("Failed to update note");
        }
    }

    handleEditorCancel(){
        this.setState({editor: false, editor_target: undefined});
    }

    handleEditorSave(new_note){
        this.setState({editor: false, editor_target: undefined});
        this.updateNote(new_note);
    }

    handleFilterChange(new_filter){
        //Terminating characters code copied from https://makandracards.com/makandra/15879-javascript-how-to-generate-a-regular-expression-from-a-string
        let temp_filter = new RegExp(new_filter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').toLowerCase());

        let temp = this.state.all_notes.filter(note =>
            (note.title.toLowerCase().match(temp_filter) !== null || note.content.toLowerCase().match(temp_filter) !== null)
        );
        this.setState({
            filter: new_filter,
            filtered_notes: temp,
        });
    }

    render(){
        if(this.did_initialized === undefined)
            return (<></>);
        else{
            return (
                <>
                    <NotepadMenu handleFilterChange={this.handleFilterChange}/>
                    {(this.state.filtered_notes.length !== 0 ? <Noteboard children={this.getNotes()}/> : <h5 style={{textAlign: "center", color: "white", margin: "20px"}}>
                        {this.state.filter === "" ? "There are no notes to show!" : "No notes matching filter!"}
                    </h5>)}
                    <AddButton handleClick={this.addNote}/>
                    {this.state.editor === true &&
                    <NoteEditor
                        target={this.state.editor_target}
                        onDelete={(this.state.editor_target === undefined ? undefined : this.deleteNote.bind(this, this.state.editor_target.key))}
                        onCancel={this.handleEditorCancel}
                        onSave={this.handleEditorSave}/>}
                </>
            );
        }
    }

}


export default Notepad;
