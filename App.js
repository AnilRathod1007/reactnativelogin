import React, {useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import {colors} from './src/constants/colors';
import Home from './src/screens/app/home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import ProductDetails from './src/screens/app/ProductDetails';

const WEB_CLIENT_ID =
  '910743581712-pgika5ohdc1qmrscdhlvbevrgjsfjlaf.apps.googleusercontent.com';
const ANDROID_CLIENT_ID =
  '910743581712-aeiftr0hbb20rrua0dak9pmrsit07l5h.apps.googleusercontent.com';
const REVERS__CLIENT_ID =
  'com.googleusercontent.apps.910743581712-aeiftr0hbb20rrua0dak9pmrsit07l5h';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/TabIcons/home_active.png')
              : require('./src/assets/TabIcons/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/TabIcons/favorites_active.png')
              : require('./src/assets/TabIcons/favorites.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/TabIcons/profile_active.png')
              : require('./src/assets/TabIcons/profile.png');
          }
          return <Image source={icon} style={{width: 24, height: 24}} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGray},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {
  const isSignedIn = true;

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: ANDROID_CLIENT_ID,
    });
  }, []);

  const theme = {
    colors: {
      background: isSignedIn ? 'none' : colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
