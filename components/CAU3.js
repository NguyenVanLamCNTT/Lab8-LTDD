import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Image } from "react-native";
import React, { useRef } from "react";
const IMAGE = require('../assets/maybay.png');
export default function CAU3() {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const start = () => {
        Animated.timing(fadeAnim, {
            toValue: 100,
            duration: 3500,
            useNativeDriver:false
        }).start();
    }

    const back = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3500,
            useNativeDriver:false
        }).start();
    }


    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        marginRight: fadeAnim
                    }
                ]}
                >
                <Image style={styles.image} source={IMAGE}/>
            </Animated.View>
            <View style={styles.btnGroup}>
                <Button title="start" onPress={start} />
                <Button title="back" onPress={back} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        margin: 20
    },
    btnGroup: {
        display: "flex",
        flexDirection: "row"
    }
  });