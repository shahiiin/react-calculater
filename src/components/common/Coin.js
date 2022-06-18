import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Images } from '../../assets'
import { routes } from '../../config/routes'
import { globalStyles } from '../../config/styles'
import { coins } from '../../screens/app/HomeStack/CreatePriceAlertScreen'
import AppIcon from './AppIcon'
import AppSwitch from './AppSwitch'
import AppText from './AppText'
import HR from './HR/HR'

import SwapableRow from './Swapable/SwapableRow'

export default function Coin({
	coin,
	index,
	length,
	noChart,
	noPrice,
	hideDetails,
	hasSwitch,
	onPress,
}) {
	const { navigate } = useNavigation()

	return (
		<SwapableRow
			leftItems={[
				{
					title: 'Receive',
					icon: 'arrow-circle-down',
					onPress: () => navigate(routes.receive, { coin }),
				},
				{
					title: 'Send',
					icon: 'arrow-circle-up',
					onPress: () => navigate(routes.send, { coin }),
				},
			]}
			rightItems={[{ title: 'Hide', icon: 'eye-slash' }]}
		>
			<TouchableOpacity onPress={onPress} activeOpacity={0.9}>
				<View style={{ flexDirection: 'row', zIndex: 9 }}>
					<View style={{ flex: 1 }}>
						<View style={{ flexDirection: 'row' }}>
							<AppIcon name={coin.icon} />
							<View style={{ paddingStart: 8 }}>
								<AppText bold typo="md">
									{coin.slug}
								</AppText>
								<AppText typo="tiny" color="text3">
									{coin.title}
								</AppText>
								{noPrice ? null : (
									<AppText color="text2" bold style={{ marginTop: 4 }}>
										{coin.currency}
										{coin.price}
									</AppText>
								)}
							</View>
						</View>
					</View>
					{noChart ? null : (
						<View style={{ flex: 1, ...globalStyles.flex.center }}>
							<Image source={Images[coin.chart]} />
						</View>
					)}
					{hideDetails ? null : (
						<View style={{ flex: 1, alignItems: 'flex-end' }}>
							<AppText typo="md" bold>
								{coin.amount}
							</AppText>
							<AppText
								typo="dot"
								bold
								color={coin.increase ? 'success' : 'failure'}
								style={{ marginVertical: 4 }}
							>
								{coin.increase ? '+' : '-'}
								{coin.amount}
							</AppText>
							{noPrice ? null : (
								<AppText bold color="text2">
									{coin.balance}
								</AppText>
							)}
						</View>
					)}
					{hasSwitch ? (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<AppSwitch value={true} />
						</View>
					) : null}
				</View>
				<View style={{ marginVertical: 12 }}>
					{index + 1 !== (length || coins.length) ? <HR /> : null}
				</View>
			</TouchableOpacity>
		</SwapableRow>
	)
}
