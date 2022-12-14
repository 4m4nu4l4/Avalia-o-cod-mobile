import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HomeManu } from "../screens/Home";

import { LoginEmanu } from "../screens/Login";
import { SobreManu } from "../screens/Sobre";
import { TaFoda } from "../screens/Teste";

const MBNav = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <MBNav.Navigator activeColor="#342" inactiveColor="rgba(255,255,255,0.5)">
      <MBNav.Screen
        name="Home"
        component={SobreManu}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <MBNav.Screen
        name="Login"
        component={LoginEmanu}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Sobre"
        component={HomeManu}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="teste"
        component={TaFoda}
        options={{
          tabBarLabel: "teste",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bone" color={color} size={26} />
          ),
        }}
      />
    </MBNav.Navigator>
  );
};
