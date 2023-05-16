import React from 'react';
import {SafeAreaView, Text, Button, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DetailProvider from './context/DetailProvider/Provider';
import Jobs from './Screen/Jobs/Jobs';
import Favorites from './Screen/Favorites/Favorites';
import Detail from './Screen/Detail/Detail';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const JobsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFA000',
        }}
        name="Jobs"
        component={Jobs}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFA000',
        }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
};
const FavoritesScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFA000',
        }}
        name="Favorites"
        component={Favorites}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <DetailProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={drawerStyles}>
          <Drawer.Screen name="JobsScreen" component={JobsScreen} />
          <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </DetailProvider>
  );
};
export default Router;

const drawerStyles = {
  drawerStyle: {
    backgroundColor: 'white',
    width: 200,
  },
  drawerActiveTintColor: '#FFA000',
  drawerInactiveTintColor: '#e60020',
  headerShown: false,
};
