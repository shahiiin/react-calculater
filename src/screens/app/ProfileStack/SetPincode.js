import { useNavigation } from '@react-navigation/core'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import { Icons } from '../../../assets'
import AppButton from '../../../components/common/AppButton'
import AppInput from '../../../components/common/AppInput/AppInput'
import AppText from '../../../components/common/AppText'
import Screen from '../../../components/Screen'
import { routes } from '../../../config/routes'
import { globalStyles } from '../../../config/styles'

export default function SetPincode() {
	const { navigate } = useNavigation()
	const items = useMemo(
		() => [
			{
				icon: 'key',
				placeholder: 'Type new Pincode',
				message: 'Only 4 character permitted',
				endIcon: 'eye-slash',
				alertIcon: '',
			},
			{
				icon: 'key',
				placeholder: 'Retype new Pincode',
				endIcon: 'eye-slash',
			},
		],
		[]
	)
	return (
		<Screen edges={['bottom']} style={{ ...globalStyles.gapScreen }}>
			<View style={{ flex: 1 }}>
				<View style={{ paddingVertical: 18, ...globalStyles.flex.center }}>
					<AppText typo="xs">Please set a pincode</AppText>
					<AppText typo="xs">in order to secure your wallets</AppText>
				</View>
				<View>
					{items.map((item, i) => (
						<AppInput
							key={i}
							icon={item.icon}
							placeholder={item.placeholder}
							endIcon={item.endIcon}
							message={item.message}
							alertIcon={item.alertIcon}
						/>
					))}
				</View>
			</View>
			<AppButton
				title="Submit"
				style={{ fontWeight: 'bold' }}
				onPress={() => {
					navigate(routes.wordBackup)
				}}
			/>
		</Screen>
	)
}
