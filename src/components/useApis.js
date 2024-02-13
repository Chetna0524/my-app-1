import React, { useState } from 'react';
import axios from './axios';


const useApis = () => {
	const[popular, setPopular] = useState([]);
	const[veggie, setVeggie] = useState([]);
	const[cuisine, setCuisine] = useState([]);
	const[searchResult, setSearchResult] = useState([]);
	const[recipe, setRecipe] = useState({});	


	async function getPopular(){
		const check = localStorage.getItem("popular");
		if(check){
			setPopular(JSON.parse(check));
		}else{
			try{
				const request = await axios.get(`recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`);		
				localStorage.setItem("popular", JSON.stringify(request.data.recipes));
				setPopular(request.data.recipes);
				return request;  
			}catch(err){
				console.log(err)
			}		
		}
				
	}

	async function getVeggie(){
		const check = localStorage.getItem("veggie");
		if(check){
			setVeggie(JSON.parse(check));
		}else{
			try{
				const request = await axios.get(`recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=30&tags=vegetarian`);		
				localStorage.setItem("veggie", JSON.stringify(request.data.recipes));
				setVeggie(request.data.recipes);
				return request;  
			}catch(err){
				console.log(err.mseaage)
			}		
		}
				
	}

	async function getCuisine(name){
		try{
			const request = await axios.get(`recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);				
			setCuisine(request.data.results);
			return request;  
		}catch(err){
			console.log(err.mseaage)
		}	
	}

	async function getSearch(name){
		try{
			const request = await axios.get(`recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);				
			setSearchResult(request.data.results);
			return request;  
		}catch(err){
			console.log(err.mseaage)
		}	
	}

	async function getRecipe(name){
		try{
			const request = await axios.get(`recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}&`);				
			setRecipe(request.data);
			return request;  
		}catch(err){
			console.log(err.mseaage)
		}	
	}



	return{
		popular,
		veggie,
		cuisine,
		getCuisine,
		getPopular,
		getVeggie,
		searchResult,
		getSearch,
		recipe,
		getRecipe
	}
}


export default useApis;