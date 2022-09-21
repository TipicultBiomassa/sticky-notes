import React, {ChangeEventHandler, useState} from "react";

interface IParam {
	id?: number;
	text: string;
	handleDeleteNote: (id: number | undefined) => void;
	updateNote: (id: number | undefined, content: string) => void;
}
const Note = (props: IParam) => {
	const [isChangeOpen, setChangeOpen] = useState(false);
	const [noteText, setNoteText] = useState('');
	const characterLimit = 250;
	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		const textArea = event.target as HTMLInputElement;
		if (characterLimit - textArea.value.length >= 0) {
			setNoteText(textArea.value);
		}
	};

	const updateFieldsConditional = ()=> {
		if(!isChangeOpen){
			return (
				<></>
			)
		} else {
			return (
				<>
					<textarea
						rows={8}
						cols={10}
						placeholder='Update note text...'
						value={noteText}
						onChange={handleChange as unknown as ChangeEventHandler<HTMLTextAreaElement>}
					/>
					<button onClick={()=>{
						props.updateNote(props.id,noteText);
						setChangeOpen(!isChangeOpen);
					}}>Save changes</button>
				</>
			)
		}
	}
	return (
		<div className='note'>
			<span>{props.text}</span>
			<div className='note-footer'>
				<button
					onClick={() => setChangeOpen(!isChangeOpen)}
					className='delete-icon'
				>Update</button>
				<button
					onClick={() => props.handleDeleteNote(props.id)}
					className='delete-icon'
				>Delete</button>
			</div>
			{updateFieldsConditional()}

		</div>
	);
};

export default Note;
