import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "./AppParamList";
import { Ionicons } from "@expo/vector-icons";
import { HomeStack } from "./Home/HomeStack";
import { SearchStack } from "./Search/SearchStack";
import { MenuStack } from "./Menu/MenuStack";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Menu") {
            iconName = focused ? "ios-folder-open" : "ios-folder";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName!} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
      initialRouteName="Menu"
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
      <Tabs.Screen name="Menu" component={MenuStack} />
    </Tabs.Navigator>
  );
};
