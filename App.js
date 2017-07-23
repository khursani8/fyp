import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/Search';
import BusListScreen from './screens/BusList';
import InfoScreen from './screens/Info';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Search: {
    screen: SearchScreen
  },
  BusList: {
    screen: BusListScreen
  },
  Info: {
    screen: InfoScreen
  }
});