import { all } from 'redux-saga/effects'
import { watchAppSettingSagas } from './modules/appSettings'

export default function* rootSaga() {
	yield all([yield watchAppSettingSagas()])
}
