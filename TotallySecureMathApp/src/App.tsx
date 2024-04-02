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

export type TRootStackParamList = {
    Login: undefined;
    Notes: {
        user: IUser;
    };
};

function App() {
    const [signedInAs, setSignedInAs] = React.useState<IUser | false>(false);

    const Stack = createNativeStackNavigator<TRootStackParamList>();

    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                const user = await AsyncStorage.getItem('user');
                if (user) {
                    setSignedInAs(JSON.parse(user));
                }
            } catch (e) {
                console.error(e);
            }
        }

        bootstrapAsync();
    }, []);

    const onLogin = async (user: IUser) => {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setSignedInAs(user);
    }

    const onLogout = async () => {
        await AsyncStorage.removeItem('user');
        setSignedInAs(false);
    }


    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {signedInAs ? (
                    <Stack.Screen name="Notes">
                        {props => <Notes {...props} user={signedInAs} onLogout={onLogout} />}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen name="Login">
                        {props => <Login {...props} onLogin={onLogin} />}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});

export default App;
