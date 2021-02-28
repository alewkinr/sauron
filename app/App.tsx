import AppLoading from "expo-app-loading";
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import store from "./store";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import {SafeAreaView, StyleSheet, TextInput, View} from "react-native";
import SearchIconSvg from "./components/SearchIconSvg";


export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    useEffect(() => {
        register()
    }, [])

    async function register() {
        const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        console.log(status)
        if (status !== 'granted') {
            const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        }
        const token = await Notifications.getExpoPushTokenAsync()
        console.log(status, token)
    }

    if (!isLoadingComplete) {
        return <AppLoading/>;
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <SafeAreaView>

                    </SafeAreaView>
                        <Navigation colorScheme={colorScheme}/>
                        <StatusBar/>
                </SafeAreaProvider>
            </Provider>
        );
    }
}



