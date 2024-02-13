import React from 'react';
import { Component } from 'react';


class Counter extends Component{
	state = {
		value:this.props.value
	};

	getBadgeClasses(){
		let classes = "text-white mx-4 badge bg-";
		classes += this.state.value === 0 ? 'warning' :'primary';
		return classes
	};

	handleIncrement = () => {
		this.setState({value :this.state.value + 1});		
	}

	render(){
		return(
			<div className="my-2">				
				<span className={this.getBadgeClasses()}>
					{this.state.value == 0 ? "Zero" : this.state.value}
				</span>	
				<button className="btn btn-info mx-2" onClick={this.handleIncrement}>Increment</button>		
				<button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>	
			</div>
		)
	}
}


export default Counter;