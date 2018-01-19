// This component will compile the home page and its child components.

import React, { Component } from 'react';
import Map from './Map';

export default class extends Component {

	render() {
		return (
			<div>
				<Map />
			</div>
		)
	}
}

// export default Home; 