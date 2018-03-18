import React from 'react'
import PropTypes from 'prop-types'

import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
	{entries.map(({id, date, guesses, player})=>(
      <tr key={id}>
		<td className="date">{date}</td>
		<td className="guesses">{guesses}</td>
		<td className="player">{player}</td>
	  </tr>
	  ))}
    </tbody>
  </table>
)

HallOfFame.propType = {
	entries : PropTypes.arrayOf(
		PropTypes.shape({
			id : PropTypes.number.isRequired,
			guesses : PropTypes.number.isRequired,
			date : PropTypes.string.isrequired,
			player: PropTypes.string.isrequired,
		}))
}

export default HallOfFame

// == Internal helpers ==============================================

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '10/10/2017', player: 'Jane' },
  { id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin' },
  { id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa' },
  { id: 0, guesses: 48, date: '14/10/2017', player: 'Marc' },
]