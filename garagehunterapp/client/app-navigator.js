import { createStackNavigator } from 'react-navigation';
import Home from './pages/Home';
import Listings from './pages/Listings';
const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Listings:{ screen: Listings }
});

export default AppNavigator;