import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "../components/Themed";
import line from "../assets/images/lines.png";
import add from "../assets/images/add.png";
import base from "../assets/images/base.png";
import eye from "../assets/images/eye.png";
import SettingsIcon from "../components/SettingsIcon";

export default () => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginVertical: 20,
                width: Dimensions.get('window').width,
                padding: 10
            }}>
                <Text style={{fontSize: 30, fontFamily: 'SBSansDisplayBold', fontWeight: "600"}}>Поддержка</Text>
            </View>
            <View style={{padding: 10, flexDirection: 'row', marginVertical: 10}}>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{
                        paddingHorizontal: 25,
                        paddingVertical: 7,
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: '#343F48',
                        borderRadius: 8
                    }}
                >

                    <Text style={{color: '#fff', fontFamily: "SBSansDisplay", fontSize: 16}}>Документация</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        marginHorizontal: 15,
                        backgroundColor: '#F6F6F6',
                        borderRadius: 8,
                        paddingHorizontal: 25,
                        paddingVertical: 7
                    }}
                >
                    <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 16}}>Обращение</Text>
                </TouchableOpacity>
            </View>

            <View>
                <ScrollView>
                    <View style={{
                        flexDirection: "row",
                        borderRadius: 8,
                        elevation: 5,
                        shadowOffset: {width: 0, height: 6},
                        shadowColor: 'rgba(0,0,0,0.05)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        backgroundColor: '#fff',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        padding: 20,
                        justifyContent: 'space-between',
                        alignItems: "center",
                        height: 60
                    }}>


                        <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '90%'}}>Обзор API</Text>

                        <View style={{
                            borderRadius: 50,
                            width: 40,
                            height: 40,
                            backgroundColor: '#F6F6F6',
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                            <SettingsIcon width={16} height={16}/>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        borderRadius: 8,
                        elevation: 5,
                        shadowOffset: {width: 0, height: 6},
                        shadowColor: 'rgba(0,0,0,0.05)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        backgroundColor: '#fff',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        padding: 20,
                        justifyContent: 'space-between',
                        alignItems: "center",
                        height: 60
                    }}>


                        <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '90%'}}>Служба поддержки</Text>
                        <View style={{
                            borderRadius: 50,
                            width: 40,
                            height: 40,
                            backgroundColor: '#F6F6F6',
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                            <Image source={add}/>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        borderRadius: 8,
                        elevation: 5,
                        shadowOffset: {width: 0, height: 6},
                        shadowColor: 'rgba(0,0,0,0.05)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        backgroundColor: '#fff',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        padding: 20,
                        justifyContent: 'space-between',
                        alignItems: "center",
                        height: 60
                    }}>


                        <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '90%'}}>Вычисления</Text>

                        <View style={{
                            borderRadius: 50,
                            width: 40,
                            height: 40,
                            backgroundColor: '#F6F6F6',
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                            <Image source={base}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        borderRadius: 8,
                        elevation: 5,
                        shadowOffset: {width: 0, height: 6},
                        shadowColor: 'rgba(0,0,0,0.05)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        backgroundColor: '#fff',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        padding: 20,
                        justifyContent: 'space-between',
                        alignItems: "center",
                        height: 60
                    }}>
                        <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '90%'}}>Хранение</Text>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        borderRadius: 8,
                        elevation: 5,
                        shadowOffset: {width: 0, height: 6},
                        shadowColor: 'rgba(0,0,0,0.05)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        backgroundColor: '#fff',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        padding: 20,
                        justifyContent: 'space-between',
                        alignItems: "center",
                        height: 60
                    }}>
                        <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '90%'}}>Сеть</Text>
                        <Image source={line}/>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        borderRadius: 8,
                        elevation: 5,
                        shadowOffset: {width: 0, height: 6},
                        shadowColor: 'rgba(0,0,0,0.05)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        backgroundColor: '#fff',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        padding: 20,
                        justifyContent: 'space-between',
                        alignItems: "center",
                        height: 60
                    }}>
                        <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '90%'}}>Управление и
                            развёртывание</Text>
                        <View style={{
                            borderRadius: 50,
                            width: 40,
                            height: 40,
                            backgroundColor: '#F6F6F6',
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                            <Image source={eye}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
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