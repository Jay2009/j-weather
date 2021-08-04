import React from "react";
import { View, Text, StyleSheet,StatusBar  } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm: {
    iconName: "thunderstorm-outline",
    gradient: ["#bdc3c7","#2c3e50"]
    },
    Drizzle: {
    iconName: "cloud-drizzle",
    gradient: ["#5433FF","#20BDFF","#A5FECB"]
    },
    Rain: {
    iconName: "rainy-outline",
    gradient: ["#003973","#E5E5BE"]
    },
    Snow: {
    iconName: "snow",
    gradient: ["#8e9eab","#eef2f3"]
    },
    Atmosphere: {
    iconName: "weather-cloudy",
    gradient: ["#373B44","#4286f4"]
    },
    Clear: {
    iconName: "weather-sunny",
    gradient: ["#00B4DB","#0083B0"]
    },
    Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#525252","#3d72b4"]
    },
    Haze: {
    iconName: "weather-hazy",
    gradient: ["#544a7d","#ffd452"]
    },
    Mist: {
    iconName: "weather-rainy",
    gradient: ["#8360c3","#2ebf91"]
    },
    Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#6D6027","#D3CBB8"]
    }
};

export default function Weather({ temp, condition }) {
    return(
        <LinearGradient
    colors={weatherOptions[condition].gradient}
    style={styles.container}
    >
    <StatusBar barStyle="light-content" />
    <View style={styles.halfContainer}>
    <MaterialCommunityIcons
        size={96}
        name={weatherOptions[condition].iconName}
        color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
        </View>
        <View style={styles.halfContainer} />
        </LinearGradient>
        );
    }
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",

        ]).isRequired
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"skyblue",
        justifyContent: "center",
        alignItems: "center"
    },
    
    temp: {
        fontSize: 42,
        color: "white"
    },
    
    halfContainer:{
        
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
});