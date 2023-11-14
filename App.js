import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Onboard from './src/Onboarding/Onboard';
import Profile from './src/Profile/Profile';
import Schedule from './src/Schedule/Schedule';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/Home/TabNav';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
         <Stack.Navigator>     
        <Stack.Screen name="Onboarding" component={Onboard} options={{headerShown: false}} />
        <Stack.Screen name="TabNav" component={TabNav} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name="Schedule" component={Schedule} options={{headerShown: false}}/>
      </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
