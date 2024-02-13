import React, { useState, useEffect }from 'react';
import useApis from './useApis';
import { Card } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
// Default theme
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Popular(){
	const { popular, getPopular } = useApis();
	let params = useParams();
	console.log(popular);

	useEffect(() => {
		getPopular(params.type);
		console.log(params)
	}, [params.type]);

	return(
			<>
			<div className="mt-5 popular-sec" >
			   <h2 className="heading-recipe">Popular Picks</h2>
		       <Splide		       	 
		         options={ {
			      	perPage:4,
			      	arrows:false,
			      	pagination:false,
			        rewind: true,
			        gap   : '1rem',
			      } }			     
			    >
						{popular.map((recipe, index) => {
							const summEdit = recipe.summary.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '');
							const maxLength = summEdit.slice(0,150);
							return(
									 <SplideSlide   key={recipe.id}>
									 		<Link to={"/recipe/" + recipe.id}>
									          <Card>
												  <Card.Img variant="top" src={recipe.image} />
												  <Card.Body>
												    <Card.Title>{recipe.title}</Card.Title>												   					    
												  </Card.Body>
												</Card>	
											</Link>
									      </SplideSlide> 										  
													
									)
						  })}

					</Splide>
			  </div>
			
			</>
		
	);
}


export default Popular;