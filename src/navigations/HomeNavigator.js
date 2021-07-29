import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DONOR_DETAILS,
  SEARCH_DONOR,
  BLOOD_BANK,
  SETTINGS,
} from '../constants/routeNames';
import SearchDonor from '../screens/SearchDonor';
import DonorDetails from '../screens/DonorDetails';
import BloodBank from '../screens/BloodBank';
import Settings from '../screens/Settings';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const HomeNavigator = () => {
  const HomeTab = createMaterialTopTabNavigator();
  return (
    <HomeTab.Navigator initialRouteName={SEARCH_DONOR} style>
      <HomeTab.Screen name={SEARCH_DONOR} component={SearchDonor} />
      <HomeTab.Screen name={BLOOD_BANK} component={BloodBank} />
      <HomeTab.Screen name={DONOR_DETAILS} component={DonorDetails} />
      {/* <HomeTab.Screen name={SETTINGS} component={Settings} /> */}
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
