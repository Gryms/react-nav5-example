import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList, AuthNavProps } from "./AuthParamList";
import { AuthContext } from "./AuthProvider";
import { Center } from "../Center";
import { Button, Text } from "react-native";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation, route }: AuthNavProps<"Login">) {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text style={{ margin: 10 }}>Route name: {route.name}</Text>
      <Text style={{ margin: 10 }}>Login Page</Text>
      <Button
        title="go to register"
        onPress={() => navigation.navigate("Register")}
      ></Button>
      <Button title="Authentificate" onPress={() => login()}></Button>
    </Center>
  );
}

function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text style={{ margin: 10 }}>Route name: {route.name}</Text>
      <Text style={{ margin: 10 }}>Register Page</Text>
      <Button
        title="go to login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </Center>
  );
}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   header: () => null,
      // }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: "Sign In",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: "Sign Up",
        }}
      />
    </Stack.Navigator>
  );
};
