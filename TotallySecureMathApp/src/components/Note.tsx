import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';


function Note(props) {
	function evaluateEquation() {

		// check for invalid characters
		if (!isValidText(props.text)) {
			Alert.alert('Error', 'Invalid equation');
			return;
		}

		try{ // evaluate the equation
			const result =	eval(props.text);
			Alert.alert('Result', 'Result: ' + result);
		} catch	(error) { // catch invalid equations
			Alert.alert('Error', 'Invalid equation');
			return;
		}
	}

	// function to check for invalid characters using regex
	function isValidText(text) {
		const regex = /^[0-9\+\-\*\/\(\) ]+$/;
		return regex.test(text);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{props.title}
			</Text>
			<Text style={styles.text}>
				{props.text}
			</Text>

			<View style={styles.evaluateContainer}>
				<Button title='Evaluate' onPress={evaluateEquation} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: '#fff',
		borderRadius: 5,
		borderColor: 'black',
		borderWidth: 1
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	text: {
		fontSize: 16,
	},
	evaluateContainer: {
		marginTop: 10,
		marginBottom: 10
	}
});

export default Note;