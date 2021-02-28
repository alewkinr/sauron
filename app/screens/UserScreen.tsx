import React from "react";
import {View, Image, Text, TouchableOpacity, StyleSheet} from "react-native";
import user from '../assets/images/user.png'
import ArrowIcon from "../components/ArrowIcon";


export default () => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingHorizontal: 30,
                marginTop: 30
            }}>
                <View style={{
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    backgroundColor: '#F6F6F6',
                    justifyContent: 'center',
                    alignItems: "center",
                }}>
                    <Image source={user}/>
                </View>
                <Text style={{marginHorizontal: 25, fontSize: 18, fontFamily: 'SBSansDisplayBold'}}>hackathon</Text>
            </View>
            <View style={{padding: 10, flexDirection: 'row', marginVertical: 40, marginHorizontal: 20}}>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{
                        paddingHorizontal: 25,
                        paddingVertical: 7,
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 8,
                        elevation: 5,
                        shadowOffset: {width: 0, height: 6},
                        shadowColor: 'rgba(0,0,0,0.05)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                    }}
                >

                    <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 16}}>Баланс</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        marginLeft: 15,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 8,
                        width: 150,
                        paddingHorizontal: 25,
                        paddingVertical: 7,
                        elevation: 5,
                        shadowOffset: {width: 0, height: 6},
                        shadowColor: 'rgba(0,0,0,0.05)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                    }}
                >

                    {/*<ArrowIcon/>*/}
                    <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 16}}>1000₽</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginHorizontal: 20,
                borderRadius: 8,
                elevation: 5,
                shadowOffset: {width: 0, height: 6},
                shadowColor: 'rgba(0,0,0,0.05)',
                shadowRadius: 10,
                shadowOpacity: 1,
                backgroundColor: '#fff',
                height: 80
            }}>
                <Text
                    style={{paddingHorizontal: 20, paddingVertical: 10, fontSize: 20, fontFamily: "SBSansDisplayBold"}}>
                    Настройки
                </Text>
                <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                    <Text style={{
                        paddingHorizontal: 20,
                        paddingRight: 40,
                        fontSize: 16,
                        fontFamily: "SBSansDisplay"

                    }}>
                        Управление доступом пользователей
                    </Text>
                    <ArrowIcon fill={'#07E897'} width={16} height={16}/>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {

                }}
                style={{
                    justifyContent: "center",
                    alignItems: 'center',
                    marginTop: 35,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 8,
                    height: 50,
                    marginHorizontal: 20,
                    paddingHorizontal: 25,
                    paddingVertical: 7,
                    elevation: 5,
                    shadowOffset: {width: 0, height: 6},
                    shadowColor: 'rgba(0,0,0,0.05)',
                    shadowRadius: 10,
                    shadowOpacity: 1,
                }}
            >

                {/*<ArrowIcon/>*/}
                <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 16}}>Выход</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});