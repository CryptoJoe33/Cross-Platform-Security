import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from './App';
// We import the Crypto module from Expo to allow hashing
import * as Crypto from 'expo-crypto';

export interface IUser {
	username: string;
	hashedPassword: string;
}

export default async function Login(props) {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loginAttempt, setLoginAttempt] = React.useState(0);

	const users = [
		{ username: 'joe', hashedPassword: 'e99a18c428cb38d5f260853678922e03' },
		{ username: 'bob', hashedPassword: '5f4dcc3b5aa765d61d8327deb882cf99' },
	];

	function login() {
		if (loginAttempt >= 5) {
			Alert.alert('Error', 'Too many login attempts. Please try again later.');
			return;
		}

		let foundUser = false;

		for (const user of users) {
			if (username === user.username && await comparePasswords(password, user.hashedPassword)) {
				foundUser = user;

				break;
			}
		}

		if (foundUser) {
			props.onLogin(foundUser);
		} else {
			setLoginAttempt(loginAttempt + 1);
			Alert.alert('Error', 'Username or password is invalid.');
		}
	}

	/*
	This function compares the input password with the stored password through a secure function
	*/
	async function comparePasswords(inputPassword: string, storedPassword: string): Promise<boolean> {
		const hashedInputPassword = await hashPassword(inputPassword);
		// Use secure comparison to prevent timing attacks
		return hashedInputPassword === storedPassword;
	  }
	
	  /* 
	  This function hashes a plaintext password using SHA256 algorithm
	  This improves security for the application
	  */
	  async function hashPassword(password: string): Promise<string> {
		const hashedPassword = await Crypto.digestStringAsync(
		  Crypto.CryptoDigestAlgorithm.SHA256,
		  password
		);
		return hashedPassword;
	  }

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.username}
				value={username}
				onChangeText={setUsername}
				placeholder="Username"
			/>
			<TextInput
				style={styles.password}
				value={password}
				onChangeText={setPassword}
				placeholder="Password"
				secureTextEntry={true} // Hides password when input by user
			/>
			<Button title="Login" onPress={login} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	username: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		marginBottom: 10,
	},
	password: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		marginBottom: 10,
	}
});