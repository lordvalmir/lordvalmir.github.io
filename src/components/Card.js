import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-green dib bbr3 mw5 h6 pa3 ma2 grow bw2 shadow-5'> 
			<img alt='robots' src={`https://robohash.org/${id}?size=250x250`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;