import React from 'react'

const MonFormulaire = (defaultNick, name, placeholder, required) =>(
		<p>
		  <label>
			Surnom :
			<input
			  defaultValue={defaultNick}
			  name={name}
			  placeholder={placeholder}
			  ref={(field) => { this.nicknameField = field }}
			  required={required}
			  type="text"
			/>
		  </label>
		</p>
)


export default MonFormulaire