import React from "react";
import { StyleSheet,Text,View,StatusBar } from "react-native";

export default function Loading(){
    return( 
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Welcome to J weather</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:20,
        paddingVertical:30,
        backgroundColor:"skyblue"
    },
    text :{
        color: "#2c2c2c",
        fontSize: 30
    }
})