import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, Button } from "react-native";
import { HomeStackNavProps, HomeParamList } from "./HomeParamList";
import { Center } from "./Center";
import React, { useState, useRef, useEffect, Props } from "react";
import { TypedNavigator, StackNavigationState } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { StackNavigationEventMap } from "@react-navigation/stack/lib/typescript/src/types";
import { SearchParamList, SearchStackNavProps } from "./SearchParamList";

function Product({ route, navigation }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit this product"
        onPress={() =>
          navigation.navigate("EditProduct", { name: route.params.name })
        }
      />
    </Center>
  );
}

function apiCall(x: any) {
  return x;
}

function EditProduct({ route, navigation }: HomeStackNavProps<"EditProduct">) {
  const [formState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>Editing {route.params.name}</Text>
    </Center>
  );
}

export const addProductRoutes = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState,
    any,
    any,
    any
  >
) => {
  return (
    <>
      <Stack.Screen
        name="Product"
        component={Product}
        options={({
          route,
        }: HomeStackNavProps<"Product"> | SearchStackNavProps<"Product">) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProduct}
        options={({
          route,
        }:
          | HomeStackNavProps<"EditProduct">
          | SearchStackNavProps<"EditProduct">) => ({
          headerTitle: `Edit ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                route.params.submit?.current();
              }}
            >
              <Text style={{ color: "blue", margin: 10 }}>Done</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </>
  );
};
