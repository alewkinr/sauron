import React, {useState} from "react";
import {View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, ScrollView} from "react-native";

import {ScreenTitle} from "../components/ScreenTitle";
import {ScreenSubtitle} from "../components/ScreenSubtitle";
import {Text} from "../components/Themed";
import SearchIconSvg from "../components/SearchIconSvg";
import useCachedResources from "../hooks/useCachedResources";
import {LinearGradient} from "expo-linear-gradient";
import Divider from "../components/Divider";
import { ResourceCardView } from "../components/ResourceCard/ResourceCardView";
import { Chart, ChartTypes } from "../components/Chart/index";
import FilterIconSvg from "../components/FilterIconSvg";
import SettingsIcon from "../components/SettingsIcon";


export default function OverviewScreen() {
    const [searchField, setSearchField] = useState('')

    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/*// todo: add search panel*/}
                <View style={{
                    // padding: 20,
                    elevation: 1,
                    shadowOffset: {width: 0, height: 2},
                    shadowColor: 'rgba(0,0,0,0.05)',
                    shadowRadius: 6,
                    shadowOpacity: 1,
                    marginLeft: -5,
                    marginRight: -5,
                    marginTop: 10,
                    backgroundColor: '#fff',
                    position: "relative",
                }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Поиск по ключевым словам"
                        value={searchField}
                        placeholderTextColor={"#C1C1C1"}
                        onChangeText={setSearchField}
                    />
                    <SearchIconSvg width={18} height={18} style={{position: "absolute", left: 25, top: 15}}/>
                </View>
                <ScreenTitle>Мониторинг</ScreenTitle>
                <View style={{padding: 10, flexDirection: 'row'}}>
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

                        <Text style={{color: '#fff', fontFamily: "SBSansDisplay", fontSize: 16}}>Cloud Eye</Text>
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
                        <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 16}}>AOM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                        style={{
                            justifyContent: "center",
                            alignItems: 'center',
                            marginLeft: 30,
                            backgroundColor: '#F6F6F6',
                            borderRadius: 8,
                            paddingHorizontal: 15,
                            paddingVertical: 7
                        }}
                    >
                        <FilterIconSvg width={16} height={16}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                        style={{
                            justifyContent: "center",
                            alignItems: 'center',
                            marginLeft: 5,
                            backgroundColor: '#F6F6F6',
                            borderRadius: 8,
                            paddingHorizontal: 15,
                            paddingVertical: 7
                        }}
                    >
                        <SettingsIcon width={16} height={16}/>
                    </TouchableOpacity>
                </View>
                <View style={{paddingBottom: 20}}>
                    <ScrollView style={{paddingVertical: 10}} horizontal={true} invertStickyHeaders={false}
                                showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{
                                width: 130,
                                height: 54,
                                marginLeft: 10,
                                paddingHorizontal: 15,
                                paddingVertical: 7,
                                justifyContent: "flex-start",
                                alignItems: 'flex-start',
                                backgroundColor: '#343F48',
                                borderRadius: 8
                            }}
                        >

                            <Text style={{color: '#fff', fontFamily: "SBSansDisplay", fontSize: 14}}>Избранный
                                мониторинг</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{
                                width: 130,
                                height: 54,
                                marginLeft: 10,
                                paddingHorizontal: 15,
                                paddingVertical: 7,
                                justifyContent: "flex-start",
                                alignItems: 'flex-start',
                                backgroundColor: '#F6F6F6',
                                borderRadius: 8
                            }}
                        >

                            <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 14}}>Сервер</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{
                                width: 130,
                                height: 54,
                                marginLeft: 10,
                                paddingHorizontal: 15,
                                paddingVertical: 7,
                                justifyContent: "flex-start",
                                alignItems: 'flex-start',
                                backgroundColor: '#F6F6F6',
                                borderRadius: 8
                            }}
                        >

                            <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 14}}>Облачный
                                сервис</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{
                                width: 130,
                                height: 54,
                                marginLeft: 10,
                                paddingHorizontal: 15,
                                paddingVertical: 7,
                                justifyContent: "flex-start",
                                alignItems: 'flex-start',
                                backgroundColor: '#F6F6F6',
                                borderRadius: 8
                            }}
                        >

                            <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 14}}>Пользователи</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{
                                width: 130,
                                height: 54,
                                marginLeft: 10,
                                paddingHorizontal: 15,
                                paddingVertical: 7,
                                justifyContent: "flex-start",
                                alignItems: 'flex-start',
                                backgroundColor: '#F6F6F6',
                                borderRadius: 8
                            }}
                        >

                            <Text style={{color: '#000', fontFamily: "SBSansDisplay", fontSize: 14}}>События</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <Divider style={{
                    marginHorizontal: 10,
                    borderBottomColor: "#F1F1F1",
                    borderBottomWidth: 1
                }}/>
                <ScrollView style={{}}>
                    <View style={{paddingHorizontal: 10, paddingTop: 30}}>
                        <ScreenSubtitle>Ресурсы</ScreenSubtitle>
                        <Text style={{paddingVertical: 10}}>
                            Ни для одного из ресурсов не сработало никаких сигналов тревоги
                        </Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                    style={{paddingVertical: 15}}>
                            <View style={{width: 140}}>
                                <View style={styles.square}>

                                </View>
                                <Text style={{
                                    paddingVertical: 15,
                                    paddingLeft: 13,
                                    fontFamily: "SBSansDisplay",
                                    fontSize: 14
                                }}>Гибкий
                                    облачный сервер
                                </Text>
                            </View>
                            <View style={{width: 130}}>
                                <View style={styles.square}>

                                </View>
                                <Text style={{
                                    paddingVertical: 15,
                                    paddingLeft: 15,
                                    fontFamily: "SBSansDisplay",
                                    fontSize: 14
                                }}>
                                    Гибкое хранилище
                                </Text>
                            </View>

                            <View style={{width: 130}}>
                                <View style={styles.square}>

                                </View>
                                <Text style={{
                                    paddingVertical: 15,
                                    paddingLeft: 15,
                                    fontFamily: "SBSansDisplay",
                                    fontSize: 14
                                }}>
                                    Служба реляционной базы данных
                                </Text>
                            </View>

                            <View style={{width: 130}}>
                                <View style={styles.square}>

                                </View>
                                <Text style={{
                                    paddingVertical: 15,
                                    paddingLeft: 15,
                                    fontFamily: "SBSansDisplay",
                                    fontSize: 14
                                }}>
                                    Гибкий IP-адрес
                                </Text>
                            </View>
                            <View style={{width: 130}}>
                                <View style={styles.square}>

                                </View>
                                <Text style={{
                                    paddingVertical: 15,
                                    paddingLeft: 15,
                                    fontFamily: "SBSansDisplay",
                                    fontSize: 14
                                }}>
                                    Пропускная способность
                                </Text>
                            </View>

                        </ScrollView>
                    </View>

                    <View style={{
                        marginHorizontal: 10,
                        elevation: 1,
                        marginVertical: 20,
                        shadowOffset: {width: 0, height: 4},
                        shadowColor: 'rgba(0,0,0,0.1)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        height: 400,
                        paddingVertical: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{
                            fontFamily: "SBSansDisplayBold",
                            fontSize: 18,
                            paddingBottom: 10
                        }}>Статистика оповещений</Text>
                        <Divider style={{
                            borderBottomColor: "#F1F1F1",
                            borderBottomWidth: 1
                        }}/>
                    </View>
                    <View style={{
                        marginHorizontal: 10,
                        marginVertical: 20,
                        elevation: 1,
                        shadowOffset: {width: 0, height: 4},
                        shadowColor: 'rgba(0,0,0,0.1)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        height: 400,
                        paddingVertical: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{
                            fontFamily: "SBSansDisplayBold",
                            fontSize: 18,
                            paddingBottom: 10
                        }}>ECS</Text>
                        <Divider style={{
                            borderBottomColor: "#F1F1F1",
                            borderBottomWidth: 1
                        }}/>
                    </View>

                    <View style={{
                        marginHorizontal: 10,
                        marginVertical: 20,
                        elevation: 1,
                        shadowOffset: {width: 0, height: 4},
                        shadowColor: 'rgba(0,0,0,0.1)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        height: 400,
                        paddingVertical: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{
                            fontFamily: "SBSansDisplayBold",
                            fontSize: 18,
                            paddingBottom: 10
                        }}>Сеть</Text>
                        <Divider style={{
                            borderBottomColor: "#F1F1F1",
                            borderBottomWidth: 1
                        }}/>
                    </View>

                    <View style={{
                        marginHorizontal: 10,
                        marginVertical: 20,
                        elevation: 1,
                        shadowOffset: {width: 0, height: 4},
                        shadowColor: 'rgba(0,0,0,0.1)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        height: 250,
                        paddingVertical: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{
                            fontFamily: "SBSansDisplayBold",
                            fontSize: 18,
                            paddingBottom: 10
                        }}>Хранилище (служба гибких томов)</Text>
                        <Divider style={{
                            borderBottomColor: "#F1F1F1",
                            borderBottomWidth: 1
                        }}/>
                    </View>

                    <View style={{
                        marginHorizontal: 10,
                        marginVertical: 20,
                        elevation: 1,
                        shadowOffset: {width: 0, height: 4},
                        shadowColor: 'rgba(0,0,0,0.1)',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        height: 250,
                        paddingVertical: 20,
                        paddingHorizontal: 15
                    }}>
                        <Text style={{
                            fontFamily: "SBSansDisplayBold",
                            fontSize: 18,
                            paddingBottom: 10
                        }}>Хранилище (служба гибких томов)</Text>
                        <Divider style={{
                            borderBottomColor: "#F1F1F1",
                            borderBottomWidth: 1
                        }}/>
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>

        <View style={styles.container}>
      {/*// todo: add search panel*/}
      <ScreenTitle>Статистика</ScreenTitle>
      {/*// todo: add buttons*/}
      <Divider />

      <ScreenSubtitle>Ресурсы</ScreenSubtitle>
      <Text>
        Ни для одного из ресурсов не сработало никаких сигналов тревоги
      </Text>
      <ResourceCardView
        title={"test"}
        isHorizontal={true}
        resources={[
          {
            id: "1",
            amount: 2,
            alerts: 4,
          },
          {
            id: "2",
            amount: 2,
            alerts: 4,
          },
          {
            id: "3",
            amount: 2,
            alerts: 4,
          },
        ]}
      />
      {/*<Chart*/}
      {/*  type={ChartTypes.line}*/}
      {/*  height={200}*/}
      {/*  data={{*/}
      {/*    labels: ["1", "2", "3"],*/}
      {/*    datasets: [*/}
      {/*      {*/}
      {/*        data: [1, 2, 3, 4],*/}
      {/*      },*/}
      {/*    ],*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,

        backgroundColor: '#fff'
        // width: Dimensions.get("window").width,
    },
    imageStyle: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    textInput: {
        fontFamily: "SBSansDisplay",
        width: "100%",
        fontSize: 16,
        color: "#000",
        paddingLeft: 50,
        paddingVertical: 7,
        height: 53,

    },
    buttonStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "absolute",
        backgroundColor: "#fff",
        height: 53,
        borderRadius: 8,
    },
    square: {
        marginHorizontal: 7,
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        elevation: 1,
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'rgba(0,0,0,0.15)',
        shadowRadius: 9,
        shadowOpacity: 1,
        borderRadius: 8
    }
});
