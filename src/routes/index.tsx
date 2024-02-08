import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PRODUCT_DETAIL, PRODUCT_HOME} from './const';
import {RootStackParamList} from 'types/routes/root';
import ProductList from 'pages/productList';
import ProductDetail from 'pages/productDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  const routerTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#dfdfdf78',
    },
  };
  return (
    <NavigationContainer theme={routerTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={PRODUCT_HOME} component={ProductList} />
        <Stack.Screen name={PRODUCT_DETAIL} component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
