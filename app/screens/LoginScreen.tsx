import React, {useContext, useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from "react-native";
import {AuthContext} from "../context/AuthContext";
import {LinearGradient} from 'expo-linear-gradient';
// import logo from '../../assets/logo.png';
import {Dimensions} from "react-native";


export const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {signIn} = useContext(AuthContext);


    return (
        <View style={styles.center}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#3B04DD', '#000000']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%',
                }}
                start={[1.3, 0]}
                end={[-0.4, 0]}
            />
            {/*<Image style={styles.imageStyle} source={logo}/>*/}
            <TextInput style={styles.textInput}
                       placeholder="Email"
                       placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                       value={username}
                       onChangeText={setUsername}
            />
            <View
                style={
                    {
                        width: '93%',
                        borderBottomWidth: 0.5,
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        marginVertical: 20,
                        top: -105,
                    }
                }
            />
            <View style={{
                flexDirection: 'row',
                // justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '100%',
                paddingHorizontal: 16
            }}>
                <View style={{width: '65%'}}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        value={password}
                        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <View style={{width: '35%', top: -100}}>
                    <TouchableOpacity style={{}}
                                      onPress={() => alert('Hello, world!')}>
                        <Text style={{fontSize: 16, color: '#007AFF', width: '100%'}}>Забыли пароль?</Text>
                    </TouchableOpacity>
                </View>

            </View>


            <TouchableOpacity
                onPress={() => signIn({username, password})}
                style={styles.buttonStyle}>
                <Text style={{fontSize: 16, color: '#3E03E9'}}>Войти</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', position: 'absolute', bottom: 60}}>
                <Text style={{fontSize: 16, color: '#8E8E93'}}>Нет аккаунта?</Text>
                <TouchableOpacity style={{}}
                                  onPress={() => alert('Hello, world!')}>
                    <Text style={{fontSize: 16, color: '#007AFF', paddingLeft: 10}}>Создать аккаунт</Text>
                </TouchableOpacity>
            </View>
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
        position: 'relative',
        top: -160,
    },
    textInput: {
        width: '100%',
        fontSize: 16,
        // fontFamily: 'Montserrat-Regular',
        color: 'rgba(255, 255, 255, 0.6)',
        paddingHorizontal: 16,
        top: -110,
    },
    passwordInput: {
        width: '100%',
        fontSize: 16,
        textAlign: 'left',
        height: 40,
        // fontFamily: 'Montserrat-Regular',
        color: 'rgba(255, 255, 255, 0.6)',
        // paddingHorizontal: 16,
        top: -110,
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        position: 'absolute',
        backgroundColor: '#fff',
        height: 53,
        bottom: 100,
        borderRadius: 10
    }
})