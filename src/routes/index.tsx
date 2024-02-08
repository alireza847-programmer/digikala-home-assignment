import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PRODUCT_DETAIL, PRODUCT_HOME} from './const';
import {RootStackParamList} from 'types/routes/root';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={PRODUCT_HOME} component={() => {}} />
        <Stack.Screen name={PRODUCT_DETAIL} component={() => {}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
