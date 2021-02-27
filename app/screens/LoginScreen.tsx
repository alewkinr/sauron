import React, {useContext, useEffect, useRef, useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import {AuthContext} from "../context/AuthContext";
// import {LinearGradient} from 'expo-linear-gradient';
import bcg from '../assets/images/splash.png';
import {Dimensions} from "react-native";
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetBehavior from "reanimated-bottom-sheet";
import {LinearGradient} from 'expo-linear-gradient';
import SberIcon from "../components/SberIcon";


export const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [eyeIsNotOpen, setEyeIsNotOpen] = useState(true)

    const WIDTH = Dimensions.get('window').width
    const HEIGHT = Dimensions.get('window').height
    const {signIn} = useContext(AuthContext);

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: HEIGHT - 200,
            }}
        >
            <View style={{flexDirection: 'row', paddingTop: 20}}>
                <TouchableOpacity
                    onPress={() => {
                    }}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '48%',
                        marginRight: 10,
                        backgroundColor: '#55545A',
                        borderRadius: 8
                    }}>
                    <Text style={{fontSize: 16, color: '#fff', fontFamily: 'SBSansDisplay'}}>Вход</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                    }}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '48%',
                        padding: 6,
                        backgroundColor: '#F6F6F6',
                        borderRadius: 8

                    }}>
                    <Text style={{fontSize: 16, color: '#000', fontFamily: 'SBSansDisplay'}}>Регистрация</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 50, padding: 10}}>
                <Text style={{fontSize: 18}}>Логин</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Введите логин"
                    value={username}
                    placeholderTextColor={'#C1C1C1'}
                    onChangeText={setUsername}
                />
            </View>
            <View style={{paddingHorizontal: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'SBSansDisplay'}}>Пароль</Text>

                <View style={{flexDirection: 'row', position: "relative"}}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Введите пароль"
                        value={password}
                        placeholderTextColor={'#C1C1C1'}
                        onChangeText={setPassword}
                        secureTextEntry={eyeIsNotOpen}
                    />
                    <TouchableOpacity style={{position: "absolute", right: 0}}
                                      onPress={() => setEyeIsNotOpen(!eyeIsNotOpen)}>
                        <Text style={{fontSize: 18, color: '#07E897', width: '100%'}}>ghjgjg</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{width: '100%', flexDirection: "row-reverse", marginTop: 20}}>
                <TouchableOpacity style={{}}
                                  onPress={() => alert('Hello, world!')}>
                    <Text style={{fontSize: 18, color: '#07E897', width: '100%', fontFamily: 'SBSansDisplay'}}>Забыли
                        пароль?</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 50}}>

                <TouchableOpacity
                    onPress={() => signIn({username, password})}
                    style={{
                        height: 53,
                        borderRadius: 8,
                        width: '100%',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#000000', '#07E897']}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: 8
                        }}
                        start={[0, 9]}
                        end={[0, 0.1]}
                        locations={[0, 1]}
                    />
                    <Text style={{fontSize: 16, color: '#FFF', fontFamily: 'SBSansDisplay'}}>Войти</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 25, position: "relative"}}>
                <TouchableOpacity
                    onPress={() => signIn({username, password})}
                    style={{
                        height: 53,
                        borderRadius: 8,
                        width: '100%',
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#F1F1F1',

                    }}>
                    <View style={{flexDirection: 'row'}}>
                        <SberIcon style={{width: 30, height: 23}}/>
                        <Text style={{fontSize: 16, color: '#000', fontFamily: 'SBSansDisplay'}}>Войти по Сбер ID</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    );
    let sheetRef = useRef<BottomSheetBehavior | null>(null);

    useEffect(() => {
        // sheetRef.current?.snapTo(2)
        setTimeout(() => {
            sheetRef.current?.snapTo(0)
        }, 1200)
    })
    return (
        <View style={styles.center}>
            <Image source={bcg} style={styles.imageStyle}/>

            <BottomSheet
                ref={sheetRef}
                initialSnap={2}
                snapPoints={[HEIGHT - 230, WIDTH, 0]}
                borderRadius={10}
                enabledGestureInteraction={false}
                renderContent={renderContent}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width
    },
    imageStyle: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    textInput: {
        width: '100%',
        fontSize: 16,
        fontFamily: 'SBSansDisplay',
        color: '#000',
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        paddingVertical: 7,
        borderBottomColor: '#F1F1F1'
    },
    passwordInput: {
        width: '100%',
        fontSize: 16,
        textAlign: 'left',
        height: 40,
        // fontFamily: 'Montserrat-Regular',
        color: 'rgba(255, 255, 255, 0.6)',
        // paddingHorizontal: 16,
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#fff',
        height: 53,
        borderRadius: 8
    }
})

//     <LinearGradient
//         // Background Linear Gradient
//         colors={['#3B04DD', '#000000']}
//         style={{
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             top: 0,
//             height: '100%',
//         }}
//         start={[1.3, 0]}
//         end={[-0.4, 0]}
//     />
//     {/*<Image style={styles.imageStyle} source={logo}/>*/}
//     <TextInput style={styles.textInput}
//                placeholder="Email"
//                placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
//                value={username}
//                onChangeText={setUsername}
//     />
//     <View
//         style={
//             {
//                 width: '93%',
//                 borderBottomWidth: 0.5,
//                 borderColor: 'rgba(255, 255, 255, 0.5)',
//                 marginVertical: 20,
//                 top: -105,
//             }
//         }
//     />
//     <View style={{
//         flexDirection: 'row',
//         // justifyContent: 'space-between',
//         alignItems: 'flex-start',
//         width: '100%',
//         paddingHorizontal: 16
//     }}>
//         <View style={{width: '65%'}}>
//             <TextInput
//                 style={styles.passwordInput}
//                 placeholder="Password"
//                 value={password}
//                 placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
//                 onChangeText={setPassword}
//                 secureTextEntry
//             />
//         </View>
//
//         <View style={{width: '35%', top: -100}}>
//             <TouchableOpacity style={{}}
//                               onPress={() => alert('Hello, world!')}>
//                 <Text style={{fontSize: 16, color: '#007AFF', width: '100%'}}>Забыли пароль?</Text>
//             </TouchableOpacity>
//         </View>
//
//     </View>
//
//
//     <TouchableOpacity
//         onPress={() => signIn({username, password})}
//         style={styles.buttonStyle}>
//         <Text style={{fontSize: 16, color: '#3E03E9'}}>Войти</Text>
//     </TouchableOpacity>
//     <View style={{flexDirection: 'row', position: 'absolute', bottom: 60}}>
//         <Text style={{fontSize: 16, color: '#8E8E93'}}>Нет аккаунта?</Text>
//         <TouchableOpacity style={{}}
//                           onPress={() => alert('Hello, world!')}>
//             <Text style={{fontSize: 16, color: '#007AFF', paddingLeft: 10}}>Создать аккаунт</Text>
//         </TouchableOpacity>