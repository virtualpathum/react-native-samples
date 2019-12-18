import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case "red":
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case "green":
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case "blue":
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }

    }
    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -COLOR_INCREMENT)}
                color="RED" />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -COLOR_INCREMENT)}
                color="BLUE" />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -COLOR_INCREMENT)}
                color="GREEN" />

            <View style={{ height: 250, width: 380, backgroundColor: `rgb(${red},${green},${blue})` }} />

        </View>)

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default SquareScreen;
