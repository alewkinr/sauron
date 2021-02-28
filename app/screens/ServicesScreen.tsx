import {Text, View} from "../components/Themed";
import {Dimensions, SafeAreaView, ScrollView, SectionList, StyleSheet, TouchableOpacity} from "react-native";
import * as React from "react";
import Divider from "../components/Divider";
import ArrowIcon from "../components/ArrowIcon";

export default () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginVertical: 20,
                    width: Dimensions.get('window').width,
                    padding: 10
                }}>
                    <Text style={{fontSize: 30, fontFamily: 'SBSansDisplayBold', fontWeight: "600"}}>Сервисы</Text>
                    <TouchableOpacity onPress={() => {
                    }} style={{

                        backgroundColor: '#07E897',
                        paddingVertical: 10,
                        paddingHorizontal: 30,
                        borderRadius: 8
                    }}>
                        <Text style={{color: "#fff", fontFamily: 'SBSansDisplay', fontSize: 18}}>Тегирование</Text>
                    </TouchableOpacity>
                </View>
                <Divider style={{
                    marginHorizontal: 10,
                    borderBottomColor: "#F1F1F1",
                    borderBottomWidth: 1
                }}/>
                <ScrollView>
                    <View style={{}}>

                        <View style={styles.shadow}>
                            <View style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#F1F1F1',
                                borderStyle: 'solid',
                                marginHorizontal: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center'
                            }}>
                                <Text style={styles.sectionHeader}>Сборник приложений 1</Text>
                                <ArrowIcon width={16} height={16} fill={'#07E897'}/>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <Text style={styles.item}>Приложение 1</Text>
                                <ArrowIcon width={16} height={16} fill={'#E5E5E5'}/>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <Text style={styles.item}>Приложение 2</Text>
                                <ArrowIcon width={16} height={16} fill={'#E5E5E5'}/>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <Text style={styles.item}>Приложение 3</Text>
                                <ArrowIcon width={16} height={16} fill={'#E5E5E5'}/>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <Text style={styles.item}>Приложение 4</Text>
                                <ArrowIcon width={16} height={16} fill={'#E5E5E5'}/>
                            </View>
                        </View>
                        <View style={styles.shadow}>
                            <View style={{
                                marginHorizontal: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#F1F1F1',
                                borderStyle: 'solid',
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center'
                            }}>
                                <Text style={styles.sectionHeader}>Сборник приложений 2</Text>
                                <ArrowIcon width={16} height={16} fill={'#07E897'}/>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <Text style={styles.item}>Приложение 5</Text>
                                <ArrowIcon width={16} height={16} fill={'#E5E5E5'}/>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <Text style={styles.item}>Приложение 6</Text>
                                <ArrowIcon width={16} height={16} fill={'#E5E5E5'}/>
                            </View>
                        </View>

                        <View style={styles.shadow}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <Text style={styles.item}>Приложение n</Text>
                                <ArrowIcon width={16} height={16} fill={'#E5E5E5'}/>
                            </View>
                        </View>
                        <View style={styles.shadow}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                paddingHorizontal: 10
                            }}>
                                <Text style={styles.item}>Приложение m</Text>
                                <ArrowIcon width={16} height={16} fill={'#E5E5E5'}/>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    item: {
        fontWeight: '600',
        fontSize: 18,
        fontFamily: 'SBSansDisplay',
        paddingVertical: 15,
    },
    sectionHeader: {
        fontWeight: '600',
        fontSize: 18,
        fontFamily: 'SBSansDisplayBold',
        paddingVertical: 15,


    },
    shadow: {
        margin: 10,
        elevation: 1,
        shadowOffset: {width: 1, height: 6},
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowRadius: 10,
        shadowOpacity: 1,
        backgroundColor: '#fff',
        borderRadius: 8
    }
});