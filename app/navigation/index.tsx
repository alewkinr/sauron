import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { useEffect, useMemo, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import { LoginScreen } from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext";

import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    let userToken;
    try {
      userToken = AsyncStorage.getItem("userToken");
    } catch (e) {
      // Restoring token failed
    }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    dispatch({ type: "RESTORE_TOKEN", token: userToken });
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        console.log(data);

        const resp = await fetch("http://37.230.195.199/api/users/signIn", {
          method: "POST",
          // cache: 'no-cache',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
        });

        const token = await resp.text();
        console.log(token);
        const userToken = AsyncStorage.setItem("userToken", token);

        dispatch({ type: "SIGN_IN", token: userToken });
      },
      signOut: async () => {
        console.log("signout");
        await AsyncStorage.clear();
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AuthContext.Provider value={authContext}>
        {state.userToken == null ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={LoginScreen} />
          </Stack.Navigator>
        ) : (
          <RootNavigator />
        )}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
