import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import Screen from '../../components/Screen'
import AppTextInput from '../../components/common/AppTextInput/AppTextInput'
import AppButton from '../../components/common/AppButton'

import globalStyles from './../../config/styles'
import AppText from '../../components/common/AppText'
const defaultStyles = globalStyles()

const WelcomeBack = () => {
	return (
		<Screen style={styles.container}>
			<View style={styles.topTexts}>
				<AppText style={styles.topText}>Welcome Back!</AppText>
			</View>
			<View style={styles.alertBox}>
				<AppText style={styles.verify}>Type your password to unlock!</AppText>
			</View>
			<View style={styles.formGroup}>
				<AppTextInput
					icon="email"
					style={styles.input}
					clearButtonMode="always"
					keyboardAppearance="dark"
					keyboardType="password"
					autoCapitalize="none"
					autoCorrect={false}
					textContentType="emailAddress"
					placeholder="Type your password"
					placeholderTextColor={defaultStyles.Colors.whiteColor}
				/>
			</View>

			<View style={styles.finger}>
				<Image
					style={styles.welcomeLogo}
					fadeDuration={300}
					source={defaultStyles.Images.fingerLogo}
				/>
			</View>
			<View style={styles.terms}>
				<AppButton title="Create New Wallet" />
				<AppButton title="I Already Have A Wallet" />
			</View>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: defaultStyles.Colors.bckColor,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	topText: {
		color: defaultStyles.Colors.textColor,
	},
	verify: {
		color: defaultStyles.Colors.textColor,
	},
	topTexts: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginVertical: 30,
	},
	alertBox: {
		flex: 1,
	},
	formGroup: {
		flex: 1,
		padding: 30,
	},
	terms: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		width: 350,
		padding: 10,
	},
	welcomeLogo: {
		height: 100,
	},
	finger: {
		flex: 3,
	},
})

export default WelcomeBack
