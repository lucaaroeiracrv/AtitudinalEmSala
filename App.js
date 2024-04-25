import Menu from './screens/menu';
import Cadastro from './screens/cadastro';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Menu: Page1,
    Cadastro: Page2,
  })
);

export default Routes;