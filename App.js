import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Entrada from "./src/pages/Entrada";
import Saida from "./src/pages/Saida";
import "react-native-gesture-handler";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrada">
        <Stack.Screen
          name="Entrada"
          component={Entrada}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Saida"
          component={Saida}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
