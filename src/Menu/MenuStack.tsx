import React from "react";
import { Center } from "../Center";
import faker from "faker";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MenuStackNavProps } from "./MenuParamList";
import { FlatList } from "react-native-gesture-handler";
import { Button, View, Text } from "react-native";
import useWindowDimensions from "../useWindowDimensions";
import { DrawerActions } from "@react-navigation/native";

interface MenuStackProps {}

const Drawer = createDrawerNavigator();

function Feed({ navigation }: MenuStackNavProps<"Feed">) {
  return (
    <Center>
      <Button
        color="blue"
        title="Open Menu"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return <Button color="#708090" title={item} onPress={() => {}} />;
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}

function Notifications({ navigation }: MenuStackNavProps<"Notifications">) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        color="blue"
        title="Open Menu"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
      <Text>Notifications Screen</Text>
    </View>
  );
}

export const MenuStack = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator drawerType={width >= 768 ? "permanent" : "front"}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};
