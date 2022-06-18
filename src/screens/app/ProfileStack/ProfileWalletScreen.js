import { useNavigation } from '@react-navigation/core'
import React, { useMemo } from 'react'
import { View, TouchableOpacity } from 'react-native'
import AppButton from '../../../components/common/AppButton'
import AppIcon from '../../../components/common/AppIcon'
import AppText from '../../../components/common/AppText'
import WalletItem from '../../../components/Profile/WalletItem'
import Screen from '../../../components/Screen'
import { routes } from '../../../config/routes'
import { globalStyles } from '../../../config/styles'
import { coins } from '../HomeStack/CreatePriceAlertScreen'

export default function ProfileWalletScreen() {
	const { navigate } = useNavigation()
	const items = useMemo(
		() => [
			{
				title: 'Hassan Zarghami’s Wallet',
				coins: [...coins, ...coins],
			},
			{
				title: 'Emad dada’s Wallet',
				coins: coins,
			},
		],
		[]
	)
	return (
		<Screen edges={['bottom']} style={{ ...globalStyles.gapScreen }}>
			<View style={{ flex: 1 }}>
				<View
					style={{
						backgroundColor: globalStyles.Colors.inputColor,
						...globalStyles.flex.row,
						...globalStyles.flex.between,
						paddingHorizontal: 18,
						paddingVertical: 24,
						borderRadius: 10,
						marginTop: 24,
					}}
				>
					<View style={{ ...globalStyles.flex.row, alignItems: 'center' }}>
						<AppIcon name="wallet2" />

						<AppText style={{ marginHorizontal: 10 }} bold typo="xs">
							Amin's Wallet
						</AppText>
					</View>
					<TouchableOpacity
						style={{ ...globalStyles.flex.row, alignItems: 'center' }}
					>
						<View style={{ paddingHorizontal: 10 }}>
							<AppIcon name="plus2" />
						</View>
						<AppText bold color="secondaryColor">
							Add Coin
						</AppText>
					</TouchableOpacity>
				</View>

				{items.map((item, i) => (
					<View style={{ marginTop: 10 }} key={i}>
						<WalletItem item={item} index={i} key={i} />
					</View>
				))}
			</View>
			<AppButton
				title={'Create New Wallet'}
				textStyle={{ fontWeight: '500' }}
				onPress={() => {
					navigate(routes.newWallet)
				}}
			/>
		</Screen>
	)
}
