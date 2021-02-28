import {Dimensions, ScrollView, StyleSheet, TouchableOpacity, View, Image} from "react-native";
import React from "react";
import {ScreenTitle} from "../components/ScreenTitle";
import {Text} from "../components/Themed";
import FilterIconSvg from "../components/FilterIconSvg";
import Divider from "../components/Divider";
import line from '../assets/images/lines.png'


export default () => {
    return (
        <View style={styles.container}>
            <ScreenTitle>События</ScreenTitle>
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

                    <Text style={{color: '#fff', fontFamily: "SBSansDisplay", fontSize: 16}}>Уведомления</Text>
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
                    <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 16}}>Протокол</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        marginLeft: 37,
                        backgroundColor: '#F6F6F6',
                        borderRadius: 8,
                        paddingHorizontal: 15,
                        paddingVertical: 7
                    }}
                >
                    <FilterIconSvg width={16} height={16}/>
                </TouchableOpacity>
            </View>
            <Divider style={{
                marginHorizontal: 10,
                borderBottomColor: "#F1F1F1",
                borderBottomWidth: 1
            }}/>
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
                        padding: 10,
                        justifyContent: 'space-between',
                        height: 80
                    }}>
                        <View>
                            <Text style={{color: "#C1C1C1", fontFamily: 'SBSansDisplay'}}>28.2.21 1:25</Text>
                            <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '90%'}}>Производительность
                                приложений упала</Text>
                        </View>
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
                        padding: 10,
                        justifyContent: 'space-between',
                        height: 80
                    }}>
                        <View>
                            <Text style={{color: "#C1C1C1", fontFamily: 'SBSansDisplay'}}>28.2.21 1:25</Text>
                            <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '100%'}}>Cеть упала</Text>
                        </View>
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
                        padding: 10,
                        justifyContent: 'space-between',
                        height: 80
                    }}>
                        <View>
                            <Text style={{color: "#C1C1C1", fontFamily: 'SBSansDisplay'}}>27.2.21 1:25</Text>
                            <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '100%'}}>Низкий индекс
                                производительности</Text>
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
                        padding: 10,
                        justifyContent: 'space-between',
                        height: 80
                    }}>
                        <View>
                            <Text style={{color: "#C1C1C1", fontFamily: 'SBSansDisplay'}}>27.2.21 1:25</Text>
                            <Text style={{fontFamily: 'SBSansDisplay', fontSize: 16, width: '100%'}}>Новый
                                пользователь</Text>
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