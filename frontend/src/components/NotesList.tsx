import Note from './Note';
import AddNote from './AddNote';
import {NoteType} from "../types";

interface IParam {
	notes: Array<NoteType>;
	handleAddNote: (content: string) => void;
	handleDeleteNote: (id: number | undefined) => void;
	updateNote: (id: number | undefined, content: string) => void;
}

const NotesList = (props: IParam) => {
	return (
		<div className='notes-list'>
			{props.notes.map((note, i) => (
				<Note
					key={i}
					id={note.id}
					text={note.content}
					handleDeleteNote={props.handleDeleteNote}
					updateNote={props.updateNote}
				/>
			))}
			<AddNote handleAddNote={props.handleAddNote} />
		</div>
	);
};

export default NotesList;
