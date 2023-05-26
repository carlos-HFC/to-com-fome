import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Confirmation, UserIdentification, Welcome } from "../pages";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="UserIdentification" component={UserIdentification} />
        <Screen name="Confirmation" component={Confirmation} />
      </Navigator>
    </NavigationContainer>
  );
}