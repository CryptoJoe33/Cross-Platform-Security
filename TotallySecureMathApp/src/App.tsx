/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PropsWithChildren } from 'react'; // Remove the "type" keyword
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Notes from './Notes';
import Login, { IUser } from './Login';

// Fix export statement
const AppExports = {
    Login: undefined,
    Notes: {
        user: IUser,
    },
};

function App() {
    const [signedInAs, setSignedInAs] = React.useState<IUser | false>(false);

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !signedInAs ?
                        <Stack.Screen name="Login">
                            {(props) => <Login {...props} onLogin={(user) => setSignedInAs(user)} />}
                        </Stack.Screen> :
                        <Stack.Screen name="Notes" component={Notes} initialParams={{ user: signedInAs }} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});

export default App;
