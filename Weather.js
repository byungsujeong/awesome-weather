import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#ffd200", "#ffffff"],
        title: "Thunderstorm",
        subTitle: "a storm with thunder and lightning and usually heavy rain"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subTitle: "rain in very small, light drops"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subTitle: "drops of water from clouds"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#b6fbff", "#83a4d4"],
        title: "Snow",
        subTitle: "the small, soft, white pieces of ice that sometimes fall from the sky"
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#FF4E50", "#F9D423"],
        title: "Clear",
        subTitle: "bright because of light from the sun"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#9bc5c3", "#616161"],
        title: "Clouds",
        subTitle: "a grey or white mass in the sky, made up of very small floating drops of water"
    },
    Mist: {
        iconName: "weather-hazy",
        gradient: ["#536976", "#BBD2C5"],
        title: "Mist",
        subTitle: "thin fog produced by very small drops of water collecting in the air just above an area of ground or water"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Smoke",
        subTitle: "the grey, black, or white mixture of gas and very small pieces of carbon that is produced when something burns"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#BBD2C5", "#536976"],
        title: "Haze",
        subTitle: "something such as heat or smoke in the air that makes it less clear, so that it is difficult to see well"
    },
    Dust: {
        iconName: "grain",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subTitle: "dry dirt in the form of powder that covers sky"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Fog",
        subTitle: "a weather condition in which very small drops of water come together to form a thick cloud close to the land or seaocean, making it difficult to see"
    },
    Sand: {
        iconName: "grain",
        gradient: ["#ffd452", "#544a7d"],
        title: "Sand",
        subTitle: "very small dry pieces of sand in the form of powder that covers sky"
    },
    Ash: {
        iconName: "grain",
        gradient: ["#f4791f","#659999", "#636363"],
        title: "Ash",
        subTitle: "the soft grey or black powder that is left after volcanic eruption"
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#3fada8", "#808080"],
        title: "Squall",
        subTitle: "a sudden strong wind or short storm"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#134E5E", "#71B280"],
        title: "Tornado",
        subTitle: "Just don't go outside"
    }
}

const Weather = ({ temp, condition, subTitle, region }) => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Text style={styles.region}>{region}</Text>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </LinearGradient>
    )
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    region: {
        color: "white",
        fontSize: 42,
        paddingBottom: 15
    },
    temp: {
        color: "white",
        fontSize: 42
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
    }
});

export default Weather;