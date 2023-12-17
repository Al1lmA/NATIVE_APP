import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServicesScreen from './screens/ServicesScreen';
import AboutServiceScreen from './screens/AboutServiceScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name='Services' component={ServicesScreen} />
                <Stack.Screen name='AboutService' component={AboutServiceScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}