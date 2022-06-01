import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import MainScreen from "./src/screens/MainScreen";
import Results from "./src/screens/Results";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#C6FFA8",
          },
          headerTintColor: "#39AB8C",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          options={{
            title: "App Conta Fácil",
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ title: "Página Inicial" }}
          name="MainScreen"
          component={MainScreen}
        />
        <Stack.Screen
          options={{ title: "Lista de Pedidos" }}
          name="Results"
          component={Results}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
