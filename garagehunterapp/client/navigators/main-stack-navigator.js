import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Hunts from '../pages/Hunts';

const stackExport = createStackNavigator({
   ProfileScreen:{
       screen: Home
   },
   FavoritesScreen:{
       screen: Favorites
   },
   Hunts:{
       screen: Hunts
   }
});

export default stackExport
