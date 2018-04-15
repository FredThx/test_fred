import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, index, onClick}) => (
	//{/* On ne peut pas ecrire 'card + feedback' car  il n'y a pas d'interprétation pour les nom de  props. On utilise alors les template*/}
	<div className={'card ${feedback}'} onClick = {() => onClick(index)}>
		<span className="symbol">
			{feedback === 'hidden' ? HIDDEN_SYMBOL : card}
		</span>
	</div>
)

Card.propType = {
	card:PropTypes.string.isRequired,
	feedback : PropTypes.oneOf([
		'visible',
		'hidden',
		'justMatched',
		'justMismatched'
	]).isRequired,
	index:PropTypes.number.isRequired,
	onclick:PropTypes.func.isRequired
}

export default Card