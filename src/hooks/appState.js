import { useEffect, useRef, useState } from 'react'
import { AppState } from 'react-native'

export function useAppState() {
	const appState = useRef(AppState.currentState)
	const [appStateVisible, setAppStateVisible] = useState(appState.current)

	const handler = nextAppState => {
		if (
			appState.current.match(/inactive|background/) &&
			nextAppState === 'active'
		) {
			// console.log('App has come to the foreground!');
		}

		appState.current = nextAppState
		setAppStateVisible(appState.current)
	}

	useEffect(() => {
		const subscription = AppState.addEventListener('change', handler)

		return () => {
			subscription?.remove?.()
		}
	}, [])

	return appStateVisible
}

export function useIsAppClosed() {
	const appState = useAppState()

	return appState !== 'active'
}
