import React, { useState, useEffect }from 'react';
import useApis from '../components/useApis';
import { useParams } from "react-router-dom";


function Recipe(){
	const { recipe,	getRecipe } = useApis();	
	let params = useParams();
	const [tabsToggle, setTabsToggle] = useState('Ingredients');

	useEffect(() =>{
		getRecipe(params.name);
	},[params.name])
	console.log(recipe)


	const toggleTabsHandler = (value) => {
		setTabsToggle(tabsToggle => value);		
	}


	return(
			<div className="row my-4">
			<div className="col-lg-6 col-md-6 col-sm-12 recipe-img">
				<h3 className="mb-3">{recipe.title}</h3>
				<img src={recipe.image} className="" alt="" />
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 recipe-info">
				<div className="btn-grp">
					<button 
						onClick={() => toggleTabsHandler('Ingredients')}
						className={tabsToggle === 'Ingredients' ? "btn-comm active" : "btn-comm"}
					>Ingredient</button>

					<button 
						onClick={() => toggleTabsHandler('Information')}
						className={tabsToggle === 'Information' ? "btn-comm active" : "btn-comm"}
					>Information</button>					
				</div>				
				<div className="row mt-3">

					{ tabsToggle === 'Ingredients' &&						
						<div className="col-lg-12 col-md-12 col-sm-12 recipe-ingredients">
							<ul>	
								{recipe.extendedIngredients && recipe.extendedIngredients.map(item =>{
									return(
										<li key={item.id}>{item.original}</li>
									)
								})}

							
							</ul>
						</div>
					}

					{ tabsToggle === 'Information' &&						
						<div className="col-lg-12 col-md-12 col-sm-12 recipe-information">
							<p dangerouslySetInnerHTML={{__html:recipe.summary}}>
								
							</p>
						</div>
					}
				</div>
			</div>
		</div>	
	)
}


export default Recipe;