import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as BlogProvider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faPencil} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from 'react-native';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="index"
            component={IndexScreen}
            options={({navigation}) => ({
              title: 'Blogs',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <FontAwesomeIcon icon={faPlus} size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({navigation, route}) => ({
              title: 'Blogs',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
                  <FontAwesomeIcon icon={faPencil} size={25} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
