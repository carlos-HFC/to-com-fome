import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Detail, Points, UserIdentification } from "../pages";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="UserIdentification" component={UserIdentification} />
        <Screen name="Points" component={Points} />
        <Screen name="Detail" component={Detail} />
      </Navigator>
    </NavigationContainer>
  );
}