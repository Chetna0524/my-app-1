import React from 'react';
import { Component } from 'react';
import Counter from './counter';


class Counters extends Component{
	state = {
		counters : [
			{id:1, value:4},
			{id:2, value:0},
			{id:3, value:0},
			{id:4, value:0},
		]
	}

	handleDelete = (counterId) => {
		const countDelete = this.state.counters.filter(c => c.id !== counterId);
		this.setState({counters : countDelete})
	}
	render(){
		return(
			<>				
				{this.state.counters.map(counter => <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />)}
			</>
		)
	}
}


export default Counters;