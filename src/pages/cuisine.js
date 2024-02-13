import React , { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from "react-router-dom";
import useApis from '../components/useApis';
import { Card } from 'react-bootstrap';


function Cuisine(){
	const { cuisine, getCuisine } = useApis();
	let params = useParams();


	useEffect(() => {
		getCuisine(params.type);
		console.log(params)
	}, [params.type])


		console.log(cuisine)
	return(
			<>
				<h3 className="uppCase text-center mt-5">{params.type}</h3>		
				<div className="row">

					{cuisine.map(item => {					
						return(
							<div  className="col-lg-4 my-3">
								<Link to={"/recipe/" + item.id}>
								 	<Card key={item.id}>
									  <Card.Img variant="top" src={item.image} />
									  <Card.Body>
									    <Card.Title>{item.title}</Card.Title>									   						    
									  </Card.Body>
								 
								
								</Card>	
								</Link>
							</div>
						)
					})}

				</div>
			</>
		
	)
}


export default Cuisine;