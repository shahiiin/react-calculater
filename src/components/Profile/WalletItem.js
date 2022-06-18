import React, { useState } from 'react'
import { View } from 'react-native'
import { Icons } from '../../assets'
import { globalStyles } from '../../config/styles'
import AppIcon from '../common/AppIcon'
import AppSwitch from '../common/AppSwitch'
import AppText from '../common/AppText'

export default function WalletItem({ item, index }) {
	const [up, setUp] = useState()
	return (
		<View
			style={{
				paddingVertical: 18,
				paddingHorizontal: 10,
				backgroundColor: globalStyles.Colors.inputColor,
				borderRadius: 10,
			}}
		>
			<View style={{ ...globalStyles.flex.row }}>
				<View
					style={{
						flex: 1,
						...globalStyles.flex.row,
						alignItems: 'center',
						...globalStyles.flex.row.between,
					}}
				>
					<View style={{ paddingHorizontal: 8 }}>
						<AppIcon name="wallet2" />
					</View>
					<AppText bold>{item.title}</AppText>
				</View>
				<View>
					<AppSwitch value={up} onValueChange={() => setUp(!up)} />
				</View>
			</View>
			<View style={{ ...globalStyles.flex.row }}>
				{item.coins.map((coin, i) => (
					<View key={i} style={{ paddingEnd: 6, paddingTop: 14 }}>
						<AppIcon name={coin.icon} />
					</View>
				))}
			</View>
		</View>
	)
}
