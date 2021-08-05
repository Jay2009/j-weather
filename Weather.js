import React from "react";
import { View, Text, StyleSheet,StatusBar  } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
    },
    Thunderstorm: {
    iconName: "thunderstorm-outline",
    gradient: ["#bdc3c7","#2c3e50"],
    title: "Thunderstorm",
    subtitle: "Stay home!!!"
    },
    Drizzle: {
    iconName: "cloud-drizzle",
    gradient: ["#5433FF","#20BDFF","#A5FECB"],
    title: "Drizzle",
    subtitle: "Is like rain, but just little"
    },
    Rain: {
    iconName: "rainy-outline",
    gradient: ["#003973","#E5E5BE"],
    title: "Rainy",
    subtitle: "It is ranning now :("
    },
    Snow: {
    iconName: "snow",
    gradient: ["#8e9eab","#eef2f3"],
    title: "Snow",
    subtitle: "Do you want to build a snowman?"
    },
    Atmosphere: {
    iconName: "weather-cloudy",
    gradient: ["#373B44","#4286f4"]
    },
    Clear: {
    iconName: "weather-sunny",
    gradient: ["#00B4DB","#0083B0"],
    title: "Sunny",
    subtitle: "Let's go out!!! yeah!"
    },
    Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#525252","#3d72b4"],
    title: "Cloudy",
        subtitle: "It is just okay to go out"
    },
    Mist: {
    iconName: "weather-rainy",
    gradient: ["#8360c3","#2ebf91"],
    title: "Mist",
    subtitle: "keep on our car-lights on when you drive!"
    },
    Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#6D6027","#D3CBB8"],
    title: "Dusty",
    subtitle: "Thanks a lot China"
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

        <View style={styles.textContainer}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
            </Text>
        </View>
        
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
        flex: 1
    },
    
    temp: {
        fontSize: 42,
        color: "white"
    },
    
    halfContainer:{
        
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
        
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
});