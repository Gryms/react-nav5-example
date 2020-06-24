import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { Center } from "../Center";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import { AuthContext } from "../Auth/AuthProvider";
import faker from "faker";
import { HomeParamList, HomeStackNavProps } from "./HomeParamList";
import { Routes } from "../Routes";
import { addProductRoutes } from "../addProductRoutes";

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Button
              color="#708090"
              title={item}
              onPress={() => {
                navigation.navigate("Product", { name: item });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerRight: () => {
          return (
            <TouchableOpacity
              style={{
                padding: 10,
                alignItems: "center",
              }}
              onPress={() => logout()}
            >
              <Text>LogOut</Text>
            </TouchableOpacity>
          );
        },
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};
