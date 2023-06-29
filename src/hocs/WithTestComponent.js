import React from 'react';

export const WithTestComponent = (Component) => {
	return (props) => {
		const {...otherProps} = props




		return (
			<Component

				{...otherProps}
			/>
		);
	};
};
