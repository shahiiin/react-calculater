import React from 'react'
import AppButton from '../../components/common/AppButton'
import Screen from '../../components/Screen'
import { useAppContext } from '../../context/appContext'

export default function ProfileScreen() {
	const [state, setState] = useAppContext()

	return (
		<Screen>
			<AppButton
				title="Logout"
				onPress={() => setState({ isLoggedIn: false })}
			/>
		</Screen>
	)
}
