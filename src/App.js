import React from "react"
import { Router } from '@reach/router'
// pages
import { Home } from './pages/Home'

import './styles/globalStyles.scss'

export const App = () => {
	return (
		<Router>
			<Home path="/" />
		</Router>
	)
}
