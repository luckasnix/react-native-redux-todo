import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './src/pages/Home'

const StackNavigator = createStackNavigator({
  'home': {
    'screen': Home
  }
})

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer