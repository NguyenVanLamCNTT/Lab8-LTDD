import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
export default function CAU2() {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
        toValue: 100,
        duration: 3500,
        useNativeDriver:false
        }).start();
    };

    return (
        <View>
             <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        marginTop: fadeAnim
                    }
                ]}
                >
                <Text style={styles.fadingText}>Fading View!</Text>
            </Animated.View>

            <View>
                <Button title="Fade In View" onPress={fadeIn} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fadingContainer: {
      padding: 20,
      backgroundColor: "powderblue",
      marginBottom: 20
    },
    fadingText: {
      fontSize: 28
    }
  });