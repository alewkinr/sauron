import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import OverviewScreen from './Overview';


export default () => {
    return (
        <View style={styles.container}>
            {/*<Text style={{fontSize: 20, fontFamily: 'SBSansDisplay'}}>Привет</Text>*/}
            {/*<Text style={{fontSize: 20}}>Привет</Text>*/}
            {/*/!*<SortableCards/>*!/*/}
            <OverviewScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
