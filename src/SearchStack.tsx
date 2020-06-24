import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchParamList, SearchStackNavProps } from "./SearchParamList";
import { Center } from "./Center";
import { Text, Button, FlatList } from "react-native";
import faker from "faker";
import { addProductRoutes } from "./addProductRoutes";

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>();

function Search({ navigation }: SearchStackNavProps<"Search">) {
  const [show, setShow] = useState(false);
  return (
    <Center>
      <Text style={{ margin: 10, fontSize: 30 }}>Search</Text>
      <Button
        title="Search Products"
        onPress={() => {
          setShow(!show);
        }}
      ></Button>
      {show ? (
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
      ) : null}
    </Center>
  );
}

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};
