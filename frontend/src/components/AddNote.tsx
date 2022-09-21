import React, {ChangeEventHandler, useState} from 'react';
import {NoteType} from "../types";
import {EventType} from "@testing-library/react";
interface IParam {
	handleAddNote: (content: string) => void;
}
const AddNote = ({ handleAddNote }: IParam) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 250;

	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		const textArea = event.target as HTMLInputElement;
		if (characterLimit - textArea.value.length >= 0) {
			setNoteText(textArea.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows={8}
				cols={10}
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange as unknown as ChangeEventHandler<HTMLTextAreaElement>}
			/>
			<div className='note-footer'>
				{characterLimit - noteText.length < 50 ? <small>
					{characterLimit - noteText.length} Remaining
				</small> : <></>}
				<button className='save' onClick={handleSaveClick}>
					Add new note
				</button>
			</div>
		</div>
	);
};

export default AddNote;
