import { useRoute } from '@react-navigation/core'
import React, { useMemo, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppInput from '../../../components/common/AppInput/AppInput'
import AppText from '../../../components/common/AppText'
import Coin from '../../../components/common/Coin'
import Screen from '../../../components/Screen'
import { routes } from '../../../config/routes'
import { coins } from '../HomeStack/CreatePriceAlertScreen'

export default function SelectCoinScreen({ navigation, route }) {
	const allCoins = useMemo(() => [...coins, ...coins, ...coins], [])
	const [filterdItems, setFilterItems] = useState(allCoins)
	const arrayHolder = allCoins
	const searchFilterFunction = text => {
		const includes = str => str.toLowerCase().includes(text.toLowerCase())
		const newData = arrayHolder.filter(item => {
			if (includes(item.title) || includes(item.slug)) {
				return item
			}
		})
		setFilterItems(newData)
	}

	const { params } = useRoute()
	const mode = params?.mode || 'send'

	return (
		<Screen edges={['bottom']}>
			<View style={{ paddingTop: 16 }}>
				<AppInput
					icon="search"
					placeholder="Search Coins..."
					onChangeText={text => {
						searchFilterFunction(text)
					}}
				/>
			</View>
			<View style={{ flex: 2 }}>
				<AppText typo="tiny" color="text2">
					Suggested
				</AppText>
				<View style={{ flex: 1, paddingVertical: 16 }}>
					<ScrollView>
						{filterdItems.map((coin, i) => (
							<Coin
								key={i}
								coin={coin}
								index={i}
								length={coins.length}
								noChart
								noPrice
								onPress={() =>
									navigation.navigate(routes[mode], { coin: coin })
								}
							/>
						))}
					</ScrollView>
				</View>
			</View>
			<View style={{ flex: 3 }}>
				<AppText typo="tiny" color="text2">
					All Coins
				</AppText>
				<View style={{ flex: 1, paddingVertical: 16 }}>
					<ScrollView>
						{filterdItems.map((coin, i) => (
							<Coin
								key={i}
								onPress={() =>
									navigation.navigate(routes[mode], { coin: coin })
								}
								coin={coin}
								index={i}
								length={allCoins.length}
								noChart
								noPrice
							/>
						))}
					</ScrollView>
				</View>
			</View>
		</Screen>
	)
}
