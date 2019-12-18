import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyle}>Welcome Home !</Text>
            <Button
                onPress={() => navigation.navigate('Component')}
                title="Components" />
            <Button
                onPress={() => navigation.navigate('Image')}
                title="Image" />
            <Button
                onPress={() => navigation.navigate('Counter')}
                title="Counter" />
            <Button
                onPress={() => navigation.navigate('Color')}
                title="Color" />
            <Button
                onPress={() => navigation.navigate('Square')}
                title="Square" />
            <Button
                onPress={() => navigation.navigate('Text')}
                title="Text" />
        </View>

    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default HomeScreen;