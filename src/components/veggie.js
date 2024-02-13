import React, { useState, useEffect } from 'react';
import useApis from './useApis';
import { Link, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
// Default theme
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Veggie(){
	const { veggie, getVeggie } = useApis();
	let params = useParams();


	useEffect(() => {
		getVeggie(params.type);
		console.log(params)
	}, [params.type]);



	return(
			<>
			<div className="mt-5 popular-sec" >
			   <h2 className="heading-recipe">Vegetarian Picks</h2>
		       <Splide		       	 
		         options={ {
			      	perPage:4,
			      	arrows:false,
			      	pagination:false,
			        rewind: true,
			        gap   : '1rem',
			      } }			     
			    >
						{veggie.map((recipe, index) => {							
							return(
									 <SplideSlide   key={recipe.id}>
									 		<Link to={"/recipe/" + recipe.id}>
									          <Card >
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


export default Veggie;