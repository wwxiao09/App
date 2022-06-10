import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import About from "./components/About";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";
import Todo from "./components/Todo";
import LibraryHours from "./components/LibraryHours";

const App = () => {
  const Root = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Root.Navigator initialRouteName="Home">
          <Root.Screen name="About" component={About} />
          <Root.Screen name="LibraryHours" component={LibraryHours} />
          <Root.Screen name="Todo" component={Todo} />
          <Root.Screen name="Home" component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity 
                  onPress={() => navigation.navigate("About")}
                  style={styles.headerRightButton}
                > 
                  <Text>About</Text>
                  <AntDesign name="caretright" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
        </Root.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
