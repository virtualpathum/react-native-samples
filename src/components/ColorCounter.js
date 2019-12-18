import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button
                onPress={() => onIncrease()}
                title={`Increase ${color}`}

            />
            <Button
                title={`Decrease ${color}`}
                onPress={() => onDecrease()}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ColorCounter;
