import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from "react-router-dom";

function Category(){
	return(
		<div className="navbar-cus">

			<NavLink to='/cuisine/italian'>
				<FaPizzaSlice />
				<span>Italian</span>
			</NavLink>

			<NavLink to='/cuisine/american'>
				<FaHamburger />
				<span>American</span>
			</NavLink>

			<NavLink to='/cuisine/thai'>
				<GiNoodles />
				<span>Thai</span>
			</NavLink>

			<NavLink to='/cuisine/japanese'>
				<GiChopsticks />
				<span>Japanese</span>
			</NavLink>
		</div>
	)
}


export default Category;