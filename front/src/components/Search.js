import React from 'react';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<button className='search-icons'  >Search</button>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
