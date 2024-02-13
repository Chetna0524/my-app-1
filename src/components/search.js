import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function Search(){
	const [ input, setInput ] = useState('');
	const navigate = useNavigate();


	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/searched/'+input)
	}

	return(
		<form onSubmit={submitHandler}>
			<div className="input-grp">
				<FaSearch />
				<input 
					onChange = {(e) => setInput(e.target.value)}
					value = {input}
				 />
				 
			</div>
		</form>

	)
}

export default Search;