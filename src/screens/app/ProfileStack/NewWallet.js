import { useNavigation } from '@react-navigation/core'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import AppButton from '../../../components/common/AppButton'
import AppInput from '../../../components/common/AppInput/AppInput'
import AppText from '../../../components/common/AppText'
import HR from '../../../components/common/HR/HR'
import NewWalletListItem from '../../../components/Profile/NewWalletListItem'
import Screen from '../../../components/Screen'
import { routes } from '../../../config/routes'
import { globalStyles } from '../../../config/styles'

export default function NewWallet() {
	const items = useMemo(() => [
		'My Wallet',
		'BTC Wallet',
		'ETH Wallet',
		'HODI Wallet',
	])
	const { navigate } = useNavigation()
	return (
		<Screen
			edges={['bottom']}
			style={{ ...globalStyles.screen, paddingHorizontal: 18 }}
		>
			<View style={{ flex: 1 }}>
				<AppInput
					name="wallet"
					icon="wallet"
					placeholder="Type your wallet name"
				/>
				<View
					style={{
						marginVertical: 18,
						borderStyle: 'solid',
						borderWidth: 1,
						borderColor: globalStyles.Colors.inputColor,
						borderRadius: 10,
					}}
				>
					<AppText bold style={{ padding: 18 }}>
						Suggested Names:
					</AppText>
					{items.map((item, i) => (
						<View key={i}>
							<NewWalletListItem title={item} />
							{i + 1 === items.length ? null : <HR />}
						</View>
					))}
				</View>
			</View>
			<AppButton
				title={'Next'}
				style={{ fontWeight: 'bold' }}
				onPress={() => {
					navigate(routes.setPincode)
				}}
			/>
		</Screen>
	)
}
