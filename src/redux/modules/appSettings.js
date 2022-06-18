import { takeEvery, put } from 'redux-saga/effects'

export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const setLoggedIn = isLoggedIn => ({
	type: SET_LOGGED_IN,
	isLoggedIn,
})

export const SET_PASSWORD = 'SET_PASSWORD'
export const setPassword = password => ({
	type: SET_PASSWORD,
	password,
})
export const SET_MODAL = 'SET_MODAL'
export const setModal = showModal => ({
	type: SET_MODAL,
	showModal,
})
export const SET_AUTH_PASS = 'SET_AUTH_PASS'
export const setAuthPass = show => ({
	type: SET_AUTH_PASS,
	show,
})

export const SET_USE_TOUCH_ID = 'SET_USE_TOUCH_ID'
export const setUseTouchId = useTouchId => ({
	type: SET_USE_TOUCH_ID,
	useTouchId,
})

const initialState = {
	isLoggedIn: null,
	useTouchId: true,
	password: null,
	authPass: false,
	showModal: false,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_MODAL:
			return {
				...state,
				showModal: action.showModal,
			}
		case SET_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
			}
		case SET_PASSWORD:
			return {
				...state,
				password: action.password,
			}
		case SET_AUTH_PASS:
			return {
				...state,
				authPass: action.show,
			}
		case SET_USE_TOUCH_ID:
			return {
				...state,
				useTouchId: action.useTouchId,
			}
		default:
			return state
	}
}

export function* watchSetLoggedIn({ isLoggedIn }) {
	if (!isLoggedIn) {
		yield put(setPassword(null))
	}
}

export function* watchAppSettingSagas() {
	yield takeEvery(SET_LOGGED_IN, watchSetLoggedIn)
}
