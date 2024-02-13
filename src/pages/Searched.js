import React , { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import useApis from '../components/useApis';
import { Card } from 'react-bootstrap';


function Searched(){
	const { searchResult, getSearch } = useApis();
	let params = useParams();


	useEffect(() => {
		getSearch(params.search);
		console.log(params.search)
	}, [params.search])

	console.log(searchResult)

	return(
		<>
				<h3 className="uppCase text-center mt-5">{params.search}</h3>		
				<div className="row">

					{searchResult.map(item => {					
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


export default Searched;