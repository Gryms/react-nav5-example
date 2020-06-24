import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProductParamList } from "../ProductParamList";

export type MenuParamList = {
  Feed: undefined;
  Notifications: undefined;
};

export type MenuStackNavProps<T extends keyof MenuParamList> = {
  navigation: StackNavigationProp<MenuParamList, T>;
  route: RouteProp<MenuParamList, T>;
};
