import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/pages/Home';
import Form from './src/pages/Form';

const StackNavigator = createStackNavigator({
  'home': {
    'screen': Home
  },
  'form': {
    'screen': Form
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;