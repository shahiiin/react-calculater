import React from 'react'
import { View } from 'react-native'
import SortHeader from '../../../components/Market/SortHeader'
import { globalStyles } from '../../../config/styles'
import { coins } from '../HomeStack/CreatePriceAlertScreen'
import MarketData from './MarketData'

export default function FavTabScreen() {
	return (
		<View style={globalStyles.screen}>
			<SortHeader />
			<MarketData items={coins} />
		</View>
	)
}
